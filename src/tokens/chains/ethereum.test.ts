import { ChainId } from '../../constants';
import { ethereumTokens } from './ethereum';

describe('#ethereumTokens', () => {
    for (const token of Object.values(ethereumTokens)) {
        it('should return true', () => {
            expect(token.chainId).toStrictEqual(ChainId.ETHEREUM);
        });
    }
});
