import { ChainId } from '../../constants';
import { sonicTokens } from './sonic';

describe('#sonicTokens', () => {
    for (const token of Object.values(sonicTokens)) {
        it('should return true', () => {
            expect(token.chainId).toStrictEqual(ChainId.SONIC);
        });
    }
});
