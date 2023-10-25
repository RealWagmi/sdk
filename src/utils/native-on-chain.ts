import { Token } from '../entities/token';
import { NativeCurrency } from '../entities/native-currency';
import { isFantom } from './is-fantom';
import { isAvalanche } from './is-avalanche';
import { isKava } from './is-kava';
import { isBsc } from './is-bsc';
import { isPolygon } from './is-polygon';
import { Ether } from '../entities/ether';
import { FantomNativeCurrency } from '../entities/fantom-native-currency';
import { AvalancheNativeCurrency } from '../entities/avalanche-native-currency';
import { BscNativeCurrency } from '../entities/bsc-native-currency';
import { KavaNativeCurrency } from '../entities/kava-native-currency';
import { PolygonNativeCurrency } from '../entities/polygon-native-currency';
import { ChainId } from '../constants/chains';

const cachedNativeCurrency: { [chainId: number]: NativeCurrency | Token } = {};

export function nativeOnChain(chainId: ChainId): NativeCurrency | Token {
    if (cachedNativeCurrency[chainId]) return cachedNativeCurrency[chainId];
    let nativeCurrency: NativeCurrency | Token;
    if (isFantom(chainId)) {
        nativeCurrency = new FantomNativeCurrency();
    } else if (isAvalanche(chainId)) {
        nativeCurrency = new AvalancheNativeCurrency();
    } else if (isKava(chainId)) {
        nativeCurrency = new KavaNativeCurrency();
    } else if (isBsc(chainId)) {
        nativeCurrency = new BscNativeCurrency();
    } else if (isPolygon(chainId)) {
        nativeCurrency = new PolygonNativeCurrency();
    } else {
        nativeCurrency = Ether.onChain(chainId);
    }
    return (cachedNativeCurrency[chainId] = nativeCurrency);
}
