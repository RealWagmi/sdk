import { ChainId } from '../../constants';
import { polygonTokens } from './polygon';

describe('#polygonTokens', () => {
    for (const token of Object.values(polygonTokens)) {
        it('should return true', () => {
            expect(token.chainId).toStrictEqual(ChainId.POLYGON);
        });
    }
});
