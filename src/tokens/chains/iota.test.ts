import { ChainId } from '../../constants';
import { iotaTokens } from './iota';

describe('#iotaTokens', () => {
    for (const token of Object.values(iotaTokens)) {
        it('should return true', () => {
            expect(token.chainId).toStrictEqual(ChainId.IOTA);
        });
    }
});
