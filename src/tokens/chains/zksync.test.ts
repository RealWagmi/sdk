import { ChainId } from '../../constants';
import { zkSyncTokens } from './zksync';

describe('#zkSyncTokens', () => {
    for(const token of Object.values(zkSyncTokens)){
        it('should return true', () => {
            expect(token.chainId).toStrictEqual(ChainId.ZKSYNC);
        });
    }
});