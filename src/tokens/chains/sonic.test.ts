import { ChainId } from '../../constants';
import { sonicTestnetTokens } from './sonic';

describe('#sonicTestnetTokens', () => {
    for (const token of Object.values(sonicTestnetTokens)) {
        it('should return true', () => {
            expect(token.chainId).toStrictEqual(ChainId.SONIC_TESTNET);
        });
    }
});
