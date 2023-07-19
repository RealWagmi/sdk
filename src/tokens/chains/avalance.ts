import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const avalancheTokens = {
    wavax: new Token(ChainId.AVALANCHE, '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', 18, 'WAVAX', 'Wrapped AVAX'),
};
