import { ChainId } from '../../constants';
import { zkLinkTokens } from './zklink';

describe('#zkLinkTokens', () => {
    for (const token of Object.values(zkLinkTokens)) {
        it('should return true', () => {
            expect(token.chainId).toStrictEqual(ChainId.ZKLINK);
        });
    }
});
