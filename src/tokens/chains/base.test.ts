import { ChainId } from '../../constants';
import { baseTokens } from './base';

describe('#baseTokens', () => {
    for(const token of Object.values(baseTokens)){
        it('should return true', () => {
            expect(token.chainId).toStrictEqual(ChainId.BASE);
        });
    }
});