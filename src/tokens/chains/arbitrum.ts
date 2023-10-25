import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const arbitrumTokens = {
    weth: new Token(ChainId.ARBITRUM, '0x82af49447d8a07e3bd95bd0d56f35241523fbab1', 18, 'WETH', 'Wrapped Ether'),
    wagmi: new Token(ChainId.ARBITRUM, '0xaf20f5f19698f1D19351028cd7103B63D30DE7d7', 18, 'WAGMI', 'Wagmi'),
    usdc: new Token(ChainId.ARBITRUM, '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', 6, 'USDC', 'USD Coin (Arb1)'),
};
