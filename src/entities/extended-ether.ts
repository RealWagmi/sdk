import { Ether, NativeCurrency, Token } from '@uniswap/sdk-core';
import { WETH9 } from '../constants';

export class ExtendedEther extends Ether {
    public get wrapped(): Token {
        const wrapped = WETH9[this.chainId];
        if (wrapped) return wrapped;
        throw new Error(`Unsupported chain ID: ${this.chainId}`);
    }

    private static _cachedExtendedEther: { [chainId: number]: NativeCurrency } = {};

    public static onChain(chainId: number): ExtendedEther {
        return this._cachedExtendedEther[chainId] ?? (this._cachedExtendedEther[chainId] = new ExtendedEther(chainId));
    }
}
