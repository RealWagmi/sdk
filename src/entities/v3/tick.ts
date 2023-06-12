import invariant from 'tiny-invariant';
import { BigintIsh } from '@uniswap/sdk-core';
import { BigNumber } from 'ethers';
import { TickMath } from '../../utils';

export interface TickConstructorArgs {
    index: number;
    liquidityGross: BigintIsh;
    liquidityNet: BigintIsh;
}

export class Tick {
    public readonly index: number;

    public readonly liquidityGross: bigint;

    public readonly liquidityNet: bigint;

    constructor({ index, liquidityGross, liquidityNet }: TickConstructorArgs) {
        invariant(index >= TickMath.MIN_TICK && index <= TickMath.MAX_TICK, 'TICK');
        this.index = index;
        this.liquidityGross = BigInt(BigNumber.from(liquidityGross.toString()).toBigInt());
        this.liquidityNet = BigInt(BigNumber.from(liquidityNet.toString()).toBigInt());
    }
}
