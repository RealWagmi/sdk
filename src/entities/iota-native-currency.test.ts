import { IotaNativeCurrency } from './iota-native-currency';
import { WETH9 } from '../constants/weth9';
import { ChainId } from '../constants/chains';

describe('IotaNativeCurrency', () => {
    describe('#equals', () => {
        it('ether on same chains is ether', () => {
            expect(new IotaNativeCurrency().equals(new IotaNativeCurrency())).toStrictEqual(true);
        });
        it('get wrapped token', () => {
            expect(WETH9[ChainId.IOTA].equals(new IotaNativeCurrency().wrapped)).toStrictEqual(true);
        });
    });
});
