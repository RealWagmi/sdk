import { isFantom } from './is-fantom';
import { isAvalanche } from './is-avalanche';
import { isKava } from './is-kava';
import { isBsc } from './is-bsc';
import { isPolygon } from './is-polygon';
import { Ether } from '../entities/ether';
import {
    AvalancheNativeCurrency,
    BscNativeCurrency,
    FantomNativeCurrency,
    KavaNativeCurrency,
    MetisNativeCurrency,
    MetisSepoliaNativeCurrency,
    PolygonNativeCurrency,
    Token,
    NativeCurrency,
} from '../entities';
import { ChainId } from '../constants/chains';
import { isMetis } from './is-metis';
import { isMetisSepolia } from './is-metis-sepolia';

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
    } else if (isMetis(chainId)) {
        nativeCurrency = new MetisNativeCurrency();
    } else if (isMetisSepolia(chainId)) {
        nativeCurrency = new MetisSepoliaNativeCurrency();
    } else {
        nativeCurrency = Ether.onChain(chainId);
    }
    return (cachedNativeCurrency[chainId] = nativeCurrency);
}
