import { WETH9 } from '../constants/weth9';
import { ChainId } from '../constants/chains';
import { MetisNativeCurrency } from './metis-native-currency';

describe('MetisNativeCurrency', () => {
    describe('#equals', () => {
        it('ether on same chains is ether', () => {
            expect(new MetisNativeCurrency().equals(new MetisNativeCurrency())).toStrictEqual(true);
        });
        it('get wrapped token', () => {
            expect(WETH9[ChainId.METIS].equals(new MetisNativeCurrency().wrapped)).toStrictEqual(true);
        });
    });
});
