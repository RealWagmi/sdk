import { ExtendedEther } from './extended-ether';
import { SupportedChainId } from '../constants';

describe('ExtendedEther', () => {
    describe('#equals', () => {
        it('ether on same chains is ether', () => {
            expect(ExtendedEther.onChain(SupportedChainId.ZK_SYNC).equals(ExtendedEther.onChain(SupportedChainId.ZK_SYNC)));
        });
    });
});
