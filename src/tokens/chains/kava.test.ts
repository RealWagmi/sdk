import { ChainId } from '../../constants';
import { kavaTokens } from './kava';

describe('#kavaTokens', () => {
    for (const token of Object.values(kavaTokens)) {
        it('should return true', () => {
            expect(token.chainId).toStrictEqual(ChainId.KAVA);
        });
    }
});
