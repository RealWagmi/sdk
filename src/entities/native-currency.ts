import { zeroAddress } from 'viem';
import { BaseCurrency } from './base-currency';
import { SerializedToken } from './token';

/**
 * Represents the native currency of the chain on which it resides, e.g.
 */
export abstract class NativeCurrency extends BaseCurrency {
    public readonly isNative = true as const;
    public readonly isToken = false as const;

    public get serialize(): SerializedToken {
        return {
            address: zeroAddress,
            chainId: this.chainId,
            decimals: this.decimals,
            symbol: this.symbol,
            name: this.name,
            isNative: this.isNative,
            isToken: this.isToken
        };
    } 
}
