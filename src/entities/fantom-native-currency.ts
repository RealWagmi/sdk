import { Currency, NativeCurrency, Token } from '@uniswap/sdk-core';
import { WETH9, SupportedChainId } from '../constants';
import invariant from 'tiny-invariant';

export class FantomNativeCurrency extends NativeCurrency {
    public constructor() {
        super(SupportedChainId.FANTOM, 18, 'FTM', 'FTM');
    }

    public equals(other: Currency): boolean {
        return other.isNative && other.chainId === this.chainId;
    }

    get wrapped(): Token {
        const wrapped = WETH9[this.chainId];
        invariant(wrapped instanceof Token);
        return wrapped;
    }
}
