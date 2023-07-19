import { ChainId } from '../constants/chains';
import { isAvalanche } from './is-avalanche';

describe('#isAvalanche', () => {
    it('should return true', () => {
        expect(isAvalanche(ChainId.AVALANCHE)).toStrictEqual(true);
    });
    it('should return false', () => {
        expect(isAvalanche(ChainId.ZKSYNC)).toStrictEqual(false);
    });
});
