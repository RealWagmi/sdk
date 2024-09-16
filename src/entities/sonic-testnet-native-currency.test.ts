import { WETH9 } from '../constants/weth9';
import { ChainId } from '../constants/chains';
import { SonicTestnetNativeCurrency } from './sonic-testnet-native-currency';

describe('SonicTestnetNativeCurrency', () => {
    describe('#equals', () => {
        it('ether on same chains is ether', () => {
            expect(new SonicTestnetNativeCurrency().equals(new SonicTestnetNativeCurrency())).toStrictEqual(true);
        });
        it('get wrapped token', () => {
            expect(WETH9[ChainId.SONIC_TESTNET].equals(new SonicTestnetNativeCurrency().wrapped)).toStrictEqual(true);
        });
    });
});
