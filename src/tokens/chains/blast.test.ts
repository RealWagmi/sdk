import { ChainId } from '../../constants';
import { blastTokens } from './blast';

describe('#blastTokens', () => {
    for(const token of Object.values(blastTokens)){
        it('should return true', () => {
            expect(token.chainId).toStrictEqual(ChainId.BLAST);
        });
    }
});