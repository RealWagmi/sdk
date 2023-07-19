import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const arbitrumTokens = {
    weth: new Token(ChainId.ARBITRUM, '0x82af49447d8a07e3bd95bd0d56f35241523fbab1', 18, 'WETH', 'Wrapped Ether'),
};
