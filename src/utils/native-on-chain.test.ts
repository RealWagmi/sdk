import { ChainId } from '../constants/chains';
import { nativeOnChain } from './native-on-chain';
import { WETH9 } from '../constants/weth9';

describe('#nativeOnChain', () => {
    it('should return true', () => {
        expect(nativeOnChain(ChainId.FANTOM).wrapped.equals(WETH9[ChainId.FANTOM])).toStrictEqual(true);
    });
    it('should return true', () => {
        expect(nativeOnChain(ChainId.AVALANCHE).wrapped.equals(WETH9[ChainId.AVALANCHE])).toStrictEqual(true);
    });
    it('should return true', () => {
        expect(nativeOnChain(ChainId.BSC).wrapped.equals(WETH9[ChainId.BSC])).toStrictEqual(true);
    });
    it('should return true', () => {
        expect(nativeOnChain(ChainId.KAVA).wrapped.equals(WETH9[ChainId.KAVA])).toStrictEqual(true);
    });
    it('should return true', () => {
        expect(nativeOnChain(ChainId.POLYGON).wrapped.equals(WETH9[ChainId.POLYGON])).toStrictEqual(true);
    });
});
