import { ChainId } from '../constants/chains';
import { isSonicTestnet } from './is-sonic-testnet';

describe('#isSonicTestnet', () => {
    it('should return true', () => {
        expect(isSonicTestnet(ChainId.SONIC_TESTNET)).toStrictEqual(true);
    });
    it('should return false', () => {
        expect(isSonicTestnet(ChainId.ZKSYNC)).toStrictEqual(false);
    });
});
