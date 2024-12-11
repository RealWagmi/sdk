import { WETH9 } from '../constants/weth9';
import { ChainId } from '../constants/chains';
import { SonicNativeCurrency } from './sonic-native-currency';

describe('SonicNativeCurrency', () => {
    describe('#equals', () => {
        it('ether on same chains is ether', () => {
            expect(new SonicNativeCurrency().equals(new SonicNativeCurrency())).toStrictEqual(true);
        });
        it('get wrapped token', () => {
            expect(WETH9[ChainId.SONIC].equals(new SonicNativeCurrency().wrapped)).toStrictEqual(true);
        });
    });
});
