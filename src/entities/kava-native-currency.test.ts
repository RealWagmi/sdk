import { KavaNativeCurrency } from './kava-native-currency';
import { WETH9 } from '../constants/weth9';
import { ChainId } from '../constants/chains';

describe('KavaNativeCurrency', () => {
    describe('#equals', () => {
        it('ether on same chains is ether', () => {
            expect(new KavaNativeCurrency().equals(new KavaNativeCurrency())).toStrictEqual(true);
        });
        it('get wrapped token', () => {
            expect(WETH9[ChainId.KAVA].equals(new KavaNativeCurrency().wrapped)).toStrictEqual(true);
        });
    });
});
