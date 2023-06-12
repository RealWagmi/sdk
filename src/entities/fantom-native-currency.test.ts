import { FantomNativeCurrency } from './fantom-native-currency';
import { WETH9 } from '../constants/weth9';
import { ChainId } from '../constants/chains';

describe('FantomNativeCurrency', () => {
    describe('#equals', () => {
        it('ether on same chains is ether', () => {
            expect(new FantomNativeCurrency().equals(new FantomNativeCurrency())).toStrictEqual(true);
        });
        it('get wrapped token', () => {
            expect(WETH9[ChainId.FANTOM].equals(new FantomNativeCurrency().wrapped)).toStrictEqual(true);
        });
    });
});
