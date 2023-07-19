import { ChainId } from '../constants/chains';
import { isBsc } from './is-bsc';

describe('#isBsc', () => {
    it('should return true', () => {
        expect(isBsc(ChainId.BSC)).toStrictEqual(true);
    });
    it('should return false', () => {
        expect(isBsc(ChainId.ZKSYNC)).toStrictEqual(false);
    });
});
