import { ChainId } from '../../constants';
import { bscTokens } from './bsc';

describe('#bscTokens', () => {
    for (const token of Object.values(bscTokens)) {
        it('should return true', () => {
            expect(token.chainId).toStrictEqual(ChainId.BSC);
        });
    }
});
