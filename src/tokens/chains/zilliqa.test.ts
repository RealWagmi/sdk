import { ChainId } from '../../constants';
import { zilliqaTokens } from './zilliqa';

describe('#zilliqaTokens', () => {
    for (const token of Object.values(zilliqaTokens)) {
        it('should return true', () => {
            expect(token.chainId).toStrictEqual(ChainId.ZILLIQA);
        });
    }
});
