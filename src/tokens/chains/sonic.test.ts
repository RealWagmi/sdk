import { ChainId } from '../../constants';
import { sonicTokens, sonicTestnetTokens } from './sonic';

describe('#sonicTokens', () => {
    for (const token of Object.values(sonicTokens)) {
        it('should return true', () => {
            expect(token.chainId).toStrictEqual(ChainId.SONIC);
        });
    }
});

describe('#sonicTestnetTokens', () => {
    for (const token of Object.values(sonicTestnetTokens)) {
        it('should return true', () => {
            expect(token.chainId).toStrictEqual(ChainId.SONIC_TESTNET);
        });
    }
});
