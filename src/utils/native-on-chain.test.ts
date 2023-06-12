import { ChainId } from '../constants/chains';
import { NativeCurrency } from '../entities';
import { nativeOnChain } from './native-on-chain';

describe('#nativeOnChain', () => {
    it('should return true', () => {
        expect(nativeOnChain(ChainId.FANTOM) instanceof NativeCurrency).toStrictEqual(true);
    });
});
