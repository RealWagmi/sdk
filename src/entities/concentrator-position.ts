import { BigintIsh, CurrencyAmount, Token } from '@uniswap/sdk-core';

import { Concentrator } from './concentrator';

interface ConcentratorPositionArgs {
    concentrator: Concentrator;
    liquidity: BigintIsh;
    amount0: BigintIsh;
    amount1: BigintIsh;
}

export class ConcentratorPosition {
    public readonly concentrator: Concentrator;
    public readonly liquidity: CurrencyAmount<Token>;
    public readonly amount0: CurrencyAmount<Token>;
    public readonly amount1: CurrencyAmount<Token>;

    public constructor({ concentrator, liquidity, amount0, amount1 }: ConcentratorPositionArgs) {
        this.concentrator = concentrator;
        this.liquidity = CurrencyAmount.fromRawAmount(concentrator, liquidity);
        this.amount0 = CurrencyAmount.fromRawAmount(concentrator.token0, amount0);
        this.amount1 = CurrencyAmount.fromRawAmount(concentrator.token1, amount1);
    }
}
