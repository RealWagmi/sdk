import { ChainId } from '../constants/chains';
import { nativeOnChain } from './native-on-chain';
import { WETH9 } from '../constants/weth9';

describe('#nativeOnChain', () => {
    const chains = Object.keys(ChainId).filter(k => !isNaN(Number(k)));
    for (const chain of chains) {
        it(`should return true ${chain}`, () => {
            //@ts-ignore
            const weth9 = WETH9[+chain];
            expect(nativeOnChain(+chain).wrapped.equals(weth9)).toStrictEqual(true);
        });
    }
});
