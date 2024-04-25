import { ChainId } from '../../constants';
import { avalancheTokens } from './avalance';

describe('#avalancheTokens', () => {
    for(const token of Object.values(avalancheTokens)){
        it('should return true', () => {
            expect(token.chainId).toStrictEqual(ChainId.AVALANCHE);
        });
    }
});