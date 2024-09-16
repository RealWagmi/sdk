import { ChainId } from '../../constants';
import { fantomTokens } from './fantom';

describe('#fantomTokens', () => {
    for (const token of Object.values(fantomTokens)) {
        it('should return true', () => {
            expect(token.chainId).toStrictEqual(ChainId.FANTOM);
        });
    }
});
