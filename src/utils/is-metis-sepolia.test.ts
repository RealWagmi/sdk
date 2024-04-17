import { ChainId } from '../constants/chains';
import { isMetisSepolia } from './is-metis-sepolia';

describe('#isMetisSepolia', () => {
    it('should return true', () => {
        expect(isMetisSepolia(ChainId.METIS_SEPOLIA)).toStrictEqual(true);
    });
    it('should return false', () => {
        expect(isMetisSepolia(ChainId.ZKSYNC)).toStrictEqual(false);
    });
});
