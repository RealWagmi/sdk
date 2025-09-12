import { WETH9 } from '../constants/weth9';
import { ChainId } from '../constants/chains';
import { ZilliqaNativeCurrency } from './zilliqa-native-currency';

describe('ZilliqaNativeCurrency', () => {
  describe('#equals', () => {
    it('ether on same chains is ether', () => {
      expect(new ZilliqaNativeCurrency().equals(new ZilliqaNativeCurrency())).toStrictEqual(true);
    });
    it('get wrapped token', () => {
      expect(WETH9[ChainId.ZILLIQA].equals(new ZilliqaNativeCurrency().wrapped)).toStrictEqual(true);
    });
  });
});
