import { ChainId } from '../../constants';
import { metisSepoliaTokens, metisTokens } from './metis';

describe('#metisTokens', () => {
    for (const token of Object.values(metisTokens)) {
        it('should return true', () => {
            expect(token.chainId).toStrictEqual(ChainId.METIS);
        });
    }
});

describe('#metisSepoliaTokens', () => {
    for (const token of Object.values(metisSepoliaTokens)) {
        it('should return true', () => {
            expect(token.chainId).toStrictEqual(ChainId.METIS_SEPOLIA);
        });
    }
});
