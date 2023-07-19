import { ChainId } from '../constants/chains';
import { isKava } from './is-kava';

describe('#isKava', () => {
    it('should return true', () => {
        expect(isKava(ChainId.KAVA)).toStrictEqual(true);
    });
    it('should return false', () => {
        expect(isKava(ChainId.ZKSYNC)).toStrictEqual(false);
    });
});
