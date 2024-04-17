import { WETH9 } from '../constants/weth9';
import { ChainId } from '../constants/chains';
import { MetisSepoliaNativeCurrency } from './metis-sepolia-native-currency';

describe('MetisSepoliaNativeCurrency', () => {
    describe('#equals', () => {
        it('ether on same chains is ether', () => {
            expect(new MetisSepoliaNativeCurrency().equals(new MetisSepoliaNativeCurrency())).toStrictEqual(true);
        });
        it('get wrapped token', () => {
            expect(WETH9[ChainId.METIS_SEPOLIA].equals(new MetisSepoliaNativeCurrency().wrapped)).toStrictEqual(true);
        });
    });
});
