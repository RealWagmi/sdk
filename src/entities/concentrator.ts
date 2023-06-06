import { CurrencyAmount, Token, BigintIsh } from '@uniswap/sdk-core';
import { FeeAmount } from '../constants';
import { computePoolAddress } from '../utils';

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
}
