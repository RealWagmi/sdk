import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const bscTokens = {
    wbnb: new Token(ChainId.BSC, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'),
};
