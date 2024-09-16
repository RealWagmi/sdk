import { ChainId } from '../../constants';
import { optimismTokens } from './optimism';

describe('#optimismTokens', () => {
    for (const token of Object.values(optimismTokens)) {
        it('should return true', () => {
            expect(token.chainId).toStrictEqual(ChainId.OPTIMISM);
        });
    }
});
