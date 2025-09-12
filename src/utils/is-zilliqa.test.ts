import { ChainId } from '../constants/chains';
import { isZilliqa } from './is-zilliqa';

describe('#isZilliqa', () => {
    it('should return true', () => {
        expect(isZilliqa(ChainId.ZILLIQA)).toStrictEqual(true);
    });
    it('should return false', () => {
        expect(isZilliqa(ChainId.ZKSYNC)).toStrictEqual(false);
    });
});
