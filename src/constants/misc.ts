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
export const TWO = 2n;
export const THREE = 3n;

export enum Project {
    WAGMI = 'wagmi',
    UNISWAP = 'uniswap',
    SUSHI = 'sushi',
    PANCAKE = 'pancake',
    KINETIX = 'kinetix',
    THRUSTER = 'thruster',
    AMBIENT = 'ambient',
}
