import { NativeCurrency, Token } from '@uniswap/sdk-core';
import { isFantom } from './is-fantom';
import { FantomNativeCurrency, ExtendedEther } from '../entities';

const cachedNativeCurrency: { [chainId: number]: NativeCurrency | Token } = {};

export function nativeOnChain(chainId: number): NativeCurrency | Token {
    if (cachedNativeCurrency[chainId]) return cachedNativeCurrency[chainId];
    let nativeCurrency: NativeCurrency | Token;
    if (isFantom(chainId)) {
        nativeCurrency = new FantomNativeCurrency();
    } else {
        nativeCurrency = ExtendedEther.onChain(chainId);
    }
    return (cachedNativeCurrency[chainId] = nativeCurrency);
}
