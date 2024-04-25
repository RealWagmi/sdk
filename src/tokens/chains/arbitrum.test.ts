import { ChainId } from '../../constants';
import { arbitrumTokens } from './arbitrum';

describe('#arbitrumTokens', () => {
    for(const token of Object.values(arbitrumTokens)){
        it('should return true', () => {
            expect(token.chainId).toStrictEqual(ChainId.ARBITRUM);
        });
    }
});