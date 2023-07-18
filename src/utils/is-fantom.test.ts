import { ChainId } from '../constants/chains';
import { isFantom } from './is-fantom';

describe('#isFantom', () => {
    it('should return true', () => {
        expect(isFantom(ChainId.FANTOM)).toStrictEqual(true);
    });
    it('should return false', () => {
        expect(isFantom(ChainId.ZKSYNC)).toStrictEqual(false);
    });
});
