import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const bscTokens = {
    wbnb: new Token(ChainId.BSC, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'),
    wagmi: new Token(ChainId.BSC, '0xaf20f5f19698f1D19351028cd7103B63D30DE7d7', 18, 'WAGMI', 'Wagmi'),
};
