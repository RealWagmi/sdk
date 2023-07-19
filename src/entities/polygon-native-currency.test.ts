import { PolygonNativeCurrency } from './polygon-native-currency';
import { WETH9 } from '../constants/weth9';
import { ChainId } from '../constants/chains';

describe('PolygonNativeCurrency', () => {
    describe('#equals', () => {
        it('ether on same chains is ether', () => {
            expect(new PolygonNativeCurrency().equals(new PolygonNativeCurrency())).toStrictEqual(true);
        });
        it('get wrapped token', () => {
            expect(WETH9[ChainId.POLYGON].equals(new PolygonNativeCurrency().wrapped)).toStrictEqual(true);
        });
    });
});
