import { Token } from '../entities/token';
import { NativeCurrency } from '../entities/native-currency';
import { isFantom } from './is-fantom';
import { Ether } from '../entities/ether';
import { FantomNativeCurrency } from '../entities/fantom-native-currency';
import { ChainId } from '../constants/chains';

const cachedNativeCurrency: { [chainId: number]: NativeCurrency | Token } = {};

export function nativeOnChain(chainId: ChainId): NativeCurrency | Token {
    if (cachedNativeCurrency[chainId]) return cachedNativeCurrency[chainId];
    let nativeCurrency: NativeCurrency | Token;
    if (isFantom(chainId)) {
        nativeCurrency = new FantomNativeCurrency();
    } else {
        nativeCurrency = Ether.onChain(chainId);
    }
    return (cachedNativeCurrency[chainId] = nativeCurrency);
}
