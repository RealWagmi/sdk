import { BscNativeCurrency } from './bsc-native-currency';
import { WETH9 } from '../constants/weth9';
import { ChainId } from '../constants/chains';

describe('BscNativeCurrency', () => {
    describe('#equals', () => {
        it('ether on same chains is ether', () => {
            expect(new BscNativeCurrency().equals(new BscNativeCurrency())).toStrictEqual(true);
        });
        it('get wrapped token', () => {
            expect(WETH9[ChainId.BSC].equals(new BscNativeCurrency().wrapped)).toStrictEqual(true);
        });
    });
});
