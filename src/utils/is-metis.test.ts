import { ChainId } from '../constants/chains';
import { isMetis } from './is-metis';

describe('#isMetis', () => {
    it('should return true', () => {
        expect(isMetis(ChainId.METIS)).toStrictEqual(true);
    });
    it('should return false', () => {
        expect(isMetis(ChainId.ZKSYNC)).toStrictEqual(false);
    });
});
