export type BigintIsh = bigint | number | string;

export enum TradeType {
    EXACT_INPUT,
    EXACT_OUTPUT,
}

export enum Rounding {
    ROUND_DOWN,
    ROUND_HALF_UP,
    ROUND_UP,
}

export const ZERO = 0n;
export const ONE = 1n;

export const MaxUint256 = BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
