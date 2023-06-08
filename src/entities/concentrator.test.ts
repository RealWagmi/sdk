import { CurrencyAmount } from '@uniswap/sdk-core';
import { Concentrator } from './concentrator';
import { fantomTokens } from '../tokens';
import { constants } from 'ethers';
import { WETH9, SupportedChainId } from '../constants';

describe('Concentrator', () => {
    describe('constructor', () => {
        it('cannot be used for tokens on different chains', () => {
            expect(
                () =>
                    new Concentrator(
                        constants.AddressZero,
                        [],
                        '100',
                        CurrencyAmount.fromRawAmount(fantomTokens.usdc, '100'),
                        CurrencyAmount.fromRawAmount(WETH9[SupportedChainId.ZK_SYNC], '100'),
                    ),
            ).toThrow('CHAIN_IDS');
        });
    });

    describe('#token0', () => {
        it('always is the token that sorts before', () => {
            expect(
                new Concentrator(constants.AddressZero, [], '100', CurrencyAmount.fromRawAmount(fantomTokens.usdc, '100'), CurrencyAmount.fromRawAmount(fantomTokens.usdt, '100'))
                    .token0,
            ).toEqual(fantomTokens.usdc);
            expect(
                new Concentrator(constants.AddressZero, [], '100', CurrencyAmount.fromRawAmount(fantomTokens.usdt, '100'), CurrencyAmount.fromRawAmount(fantomTokens.usdc, '100'))
                    .token0,
            ).toEqual(fantomTokens.usdc);
        });
    });
    describe('#token1', () => {
        it('always is the token that sorts after', () => {
            expect(
                new Concentrator(constants.AddressZero, [], '100', CurrencyAmount.fromRawAmount(fantomTokens.usdc, '100'), CurrencyAmount.fromRawAmount(fantomTokens.usdt, '100'))
                    .token1,
            ).toEqual(fantomTokens.usdt);
            expect(
                new Concentrator(constants.AddressZero, [], '100', CurrencyAmount.fromRawAmount(fantomTokens.usdt, '100'), CurrencyAmount.fromRawAmount(fantomTokens.usdc, '100'))
                    .token1,
            ).toEqual(fantomTokens.usdt);
        });
    });
    describe('#reserve0', () => {
        it('always comes from the token that sorts before', () => {
            expect(
                new Concentrator(constants.AddressZero, [], '100', CurrencyAmount.fromRawAmount(fantomTokens.usdc, '101'), CurrencyAmount.fromRawAmount(fantomTokens.usdt, '100'))
                    .reserve0,
            ).toEqual(CurrencyAmount.fromRawAmount(fantomTokens.usdc, '101'));
            expect(
                new Concentrator(constants.AddressZero, [], '100', CurrencyAmount.fromRawAmount(fantomTokens.usdc, '101'), CurrencyAmount.fromRawAmount(fantomTokens.usdt, '100'))
                    .reserve0,
            ).toEqual(CurrencyAmount.fromRawAmount(fantomTokens.usdc, '101'));
        });
    });
    describe('#reserve1', () => {
        it('always comes from the token that sorts after', () => {
            expect(
                new Concentrator(constants.AddressZero, [], '100', CurrencyAmount.fromRawAmount(fantomTokens.usdc, '100'), CurrencyAmount.fromRawAmount(fantomTokens.usdt, '101'))
                    .reserve1,
            ).toEqual(CurrencyAmount.fromRawAmount(fantomTokens.usdt, '101'));
            expect(
                new Concentrator(constants.AddressZero, [], '100', CurrencyAmount.fromRawAmount(fantomTokens.usdt, '101'), CurrencyAmount.fromRawAmount(fantomTokens.usdc, '100'))
                    .reserve1,
            ).toEqual(CurrencyAmount.fromRawAmount(fantomTokens.usdt, '101'));
        });
    });

    describe('#chainId', () => {
        it('returns the token0 chainId', () => {
            expect(
                new Concentrator(constants.AddressZero, [], '100', CurrencyAmount.fromRawAmount(fantomTokens.usdc, '100'), CurrencyAmount.fromRawAmount(fantomTokens.usdt, '100'))
                    .chainId,
            ).toEqual(SupportedChainId.FANTOM);
            expect(
                new Concentrator(constants.AddressZero, [], '100', CurrencyAmount.fromRawAmount(fantomTokens.usdc, '100'), CurrencyAmount.fromRawAmount(fantomTokens.usdt, '100'))
                    .chainId,
            ).toEqual(SupportedChainId.FANTOM);
        });
    });

    describe('#getWithdrawalAmounts', () => {
        it('return withdrawl amounts', () => {
            const constructor = new Concentrator(
                constants.AddressZero,
                [],
                '1000',
                CurrencyAmount.fromRawAmount(fantomTokens.usdc, '100'),
                CurrencyAmount.fromRawAmount(fantomTokens.usdt, '100'),
            );
            const [amount0, amount1] = constructor.getWithdrawalAmounts(CurrencyAmount.fromRawAmount(constructor.liquidityToken, '100'));
            expect(amount0).toEqual(CurrencyAmount.fromFractionalAmount(fantomTokens.usdc, '10000', '1000'));
            expect(amount1).toEqual(CurrencyAmount.fromFractionalAmount(fantomTokens.usdt, '10000', '1000'));
        });
    });

    describe('#getOutputAmount', () => {
        it('should return amount1', () => {
            const amount0 = CurrencyAmount.fromRawAmount(fantomTokens.usdc, '100');
            const amount1 = CurrencyAmount.fromRawAmount(fantomTokens.usdt, '0');

            const constructor = new Concentrator(
                constants.AddressZero,
                [],
                '1000000',
                CurrencyAmount.fromRawAmount(fantomTokens.usdc, '10000'),
                CurrencyAmount.fromRawAmount(fantomTokens.usdt, '10000'),
            );

            const amounts = constructor.getOutputAmount(amount0, amount1);
            expect(amounts).toEqual([amount0, CurrencyAmount.fromRawAmount(fantomTokens.usdt, '100')]);
        });

        it('should return amount0', () => {
            const amount0 = CurrencyAmount.fromRawAmount(fantomTokens.usdc, '0');
            const amount1 = CurrencyAmount.fromRawAmount(fantomTokens.usdt, '100');

            const constructor = new Concentrator(
                constants.AddressZero,
                [],
                '1000000',
                CurrencyAmount.fromRawAmount(fantomTokens.usdc, '10000'),
                CurrencyAmount.fromRawAmount(fantomTokens.usdt, '10000'),
            );

            const amounts = constructor.getOutputAmount(amount0, amount1);
            expect(amounts).toEqual([CurrencyAmount.fromRawAmount(fantomTokens.usdc, '100'), amount1]);
        });
    });

    describe('#getLiquidityMinted', () => {
        it('should return liquidity amount', () => {
            const constructor = new Concentrator(
                constants.AddressZero,
                [],
                '1000000',
                CurrencyAmount.fromRawAmount(fantomTokens.usdc, '10000'),
                CurrencyAmount.fromRawAmount(fantomTokens.usdt, '10000'),
            );

            const amount0 = CurrencyAmount.fromRawAmount(fantomTokens.usdc, '100');
            const amount1 = CurrencyAmount.fromRawAmount(fantomTokens.usdt, '100');
            const liquidityAmount = constructor.getLiquidityMinted(amount0, amount1);
            expect(liquidityAmount).toEqual(CurrencyAmount.fromRawAmount(constructor.liquidityToken, '10000'));
        });
    });
});