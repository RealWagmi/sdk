import { NativeCurrency } from '@uniswap/sdk-core';
import { SupportedChainId } from '../constants';
import { nativeOnChain } from './native-on-chain';

describe('#nativeOnChain', () => {
    it('should return true', () => {
        expect(nativeOnChain(SupportedChainId.FANTOM) instanceof NativeCurrency).toStrictEqual(true);
    });
});
