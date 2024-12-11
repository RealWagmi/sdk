import { ChainId } from '../constants/chains';
import { isSonic } from './is-sonic';

describe('#isSonic', () => {
    it('should return true', () => {
        expect(isSonic(ChainId.SONIC)).toStrictEqual(true);
    });
    it('should return false', () => {
        expect(isSonic(ChainId.ZKSYNC)).toStrictEqual(false);
    });
});
