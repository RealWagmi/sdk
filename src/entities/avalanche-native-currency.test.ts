import { AvalancheNativeCurrency } from './avalanche-native-currency';
import { WETH9 } from '../constants/weth9';
import { ChainId } from '../constants/chains';

describe('AvalancheNativeCurrency', () => {
    describe('#equals', () => {
        it('ether on same chains is ether', () => {
            expect(new AvalancheNativeCurrency().equals(new AvalancheNativeCurrency())).toStrictEqual(true);
        });
        it('get wrapped token', () => {
            expect(WETH9[ChainId.AVALANCHE].equals(new AvalancheNativeCurrency().wrapped)).toStrictEqual(true);
        });
    });
});
