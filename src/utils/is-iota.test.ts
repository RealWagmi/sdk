import { ChainId } from '../constants/chains';
import { isIota } from './is-iota';

describe('#isIota', () => {
    it('should return true', () => {
        expect(isIota(ChainId.IOTA)).toStrictEqual(true);
    });
    it('should return false', () => {
        expect(isIota(ChainId.ZKSYNC)).toStrictEqual(false);
    });
});
