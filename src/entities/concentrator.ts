import { CurrencyAmount, Token, BigintIsh } from '@uniswap/sdk-core';
import { FeeAmount } from '../constants';
import { computePoolAddress } from '../utils';
import { BigNumber } from 'ethers';
import invariant from 'tiny-invariant';

export class Concentrator {
    public readonly address: string;

    public readonly liquidityToken: Token;
    private readonly tokenAmounts: [CurrencyAmount<Token>, CurrencyAmount<Token>];
    private readonly fees: FeeAmount[];
    private readonly totalSupply: BigintIsh;

    public constructor(address: string, fees: FeeAmount[], totalSupply: BigintIsh, currencyAmountA: CurrencyAmount<Token>, tokenAmountB: CurrencyAmount<Token>) {
        this.address = address;
        const tokenAmounts = currencyAmountA.currency.sortsBefore(tokenAmountB.currency)
        ? [currencyAmountA, tokenAmountB]
        : [tokenAmountB, currencyAmountA]
        this.tokenAmounts = tokenAmounts as [CurrencyAmount<Token>, CurrencyAmount<Token>]
        this.liquidityToken = new Token(this.chainId, address, 18, `${this.token0}/${this.token1} WLP`, `Wagmi LP ${this.token0}/${this.token1}`);
        this.fees = fees;
        this.totalSupply = totalSupply;
    }

    public get chainId(): number {
        return this.token0.chainId
    }

    public get token0(): Token {
        return this.tokenAmounts[0].currency
    }

    public get token1(): Token {
        return this.tokenAmounts[1].currency
    }

    public get reserve0(): CurrencyAmount<Token> {
        return this.tokenAmounts[0]
    }

    public get reserve1(): CurrencyAmount<Token> {
        return this.tokenAmounts[1]
    }

    public get pools(): string[] {
        return this.fees.map((fee) => computePoolAddress({ chainId: this.chainId, tokenA: this.token0, tokenB: this.token1, fee}));
    }

    public getWithdrawalAmounts(liquidityAmount: CurrencyAmount<Token>): CurrencyAmount<Token>[] {
        const amount0 = this.reserve0.multiply(liquidityAmount).divide(this.totalSupply);
        const amount1 = this.reserve1.multiply(liquidityAmount).divide(this.totalSupply);
        return [amount0, amount1];
    }

    public getOutputAmount(currencyAmountA: CurrencyAmount<Token>, currencyAmountB: CurrencyAmount<Token>): CurrencyAmount<Token>[]{
        const tokenAmounts = currencyAmountA.currency.sortsBefore(currencyAmountB.currency) // does safety checks
        ? [currencyAmountA, currencyAmountB]
        : [currencyAmountA, currencyAmountB]

        if(this.reserve0.equalTo(0) && this.reserve1.equalTo(0)){
            return tokenAmounts;
        }

        let [tokenAmount0, tokenAmount1] = tokenAmounts;
        const _reserve0 = BigNumber.from(this.reserve0.quotient.toString());
        const _reserve1 = BigNumber.from(this.reserve1.quotient.toString());

        if(tokenAmount0.equalTo(0)){
            const amount1 = BigNumber.from(tokenAmount1.quotient.toString());
            const amount0 = this._quote(amount1, _reserve1, _reserve0).toString();
            tokenAmount0 = CurrencyAmount.fromRawAmount(tokenAmount0.currency, amount0);
        }

        const amount1Optimal = this._quote(BigNumber.from(tokenAmount0.quotient.toString()), _reserve0, _reserve1);

        if(amount1Optimal.lte(tokenAmount1.quotient.toString())){
            const newCurrencyAmount1 = CurrencyAmount.fromRawAmount(tokenAmount1.currency, amount1Optimal.toString());
            return [tokenAmount0, newCurrencyAmount1];
        } else {
            const amount0Optimal = this._quote(BigNumber.from(amount1Optimal.toString()), _reserve1, _reserve0);
            const newCurrencyAmount0 = CurrencyAmount.fromRawAmount(tokenAmount0.currency, amount0Optimal.toString());
            const newCurrencyAmount1 = CurrencyAmount.fromRawAmount(tokenAmount1.currency, amount1Optimal.toString());
            return [newCurrencyAmount0, newCurrencyAmount1];
        }
    }

    public getLiquidityMinted(tokenAmountA: CurrencyAmount<Token>, tokenAmountB: CurrencyAmount<Token>): CurrencyAmount<Token>{
        const tokenAmounts = tokenAmountA.currency.sortsBefore(tokenAmountB.currency) // does safety checks
        ? [tokenAmountA, tokenAmountB]
        : [tokenAmountB, tokenAmountA]
        invariant(tokenAmounts[0].currency.equals(this.token0) && tokenAmounts[1].currency.equals(this.token1), 'TOKEN');

        const _reserve0 = BigNumber.from(this.reserve0.quotient.toString());
        const _reserve1 = BigNumber.from(this.reserve1.quotient.toString());

        const amount0 = BigNumber.from(tokenAmounts[0].quotient.toString());
        const amount1 = BigNumber.from(tokenAmounts[1].quotient.toString());

        const l0 = amount0.mul(BigNumber.from(this.totalSupply)).div(_reserve0);
        const l1 = amount1.mul(BigNumber.from(this.totalSupply)).div(_reserve1);
        const liquidityAmount = l0.lt(l1) ? l0 : l1;
        return CurrencyAmount.fromRawAmount(this.liquidityToken, liquidityAmount.toString());
    }

    private _quote(inputAmount: BigNumber, reserveA: BigNumber, reserveB: BigNumber): BigNumber {
        invariant(inputAmount.gt(0), "INSUFFICIENT_AMOUNT");
        invariant(reserveA.gt(0) && reserveB.gt(0), "INSUFFICIENT_LIQUIDITY");
        return inputAmount.mul(reserveB).div(reserveA);
    }
}
