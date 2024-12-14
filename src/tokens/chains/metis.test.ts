import { ChainId } from '../../constants';
import { metisTokens } from './metis';

describe('#metisTokens', () => {
    for (const token of Object.values(metisTokens)) {
        it('should return true', () => {
            expect(token.chainId).toStrictEqual(ChainId.METIS);
        });
    }
});
