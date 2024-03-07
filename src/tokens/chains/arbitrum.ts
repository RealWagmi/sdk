import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const arbitrumTokens = {
    weth: new Token(ChainId.ARBITRUM, '0x82af49447d8a07e3bd95bd0d56f35241523fbab1', 18, 'WETH', 'Wrapped Ether'),
    wagmi: new Token(ChainId.ARBITRUM, '0xaf20f5f19698f1D19351028cd7103B63D30DE7d7', 18, 'WAGMI', 'Wagmi'),
    usdc_e: new Token(ChainId.ARBITRUM, '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', 6, 'USDC', 'USD Coin (Arb1)'),
    usdt: new Token(ChainId.ARBITRUM, '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', 6, 'USDT', 'Tether USD'),
    wbtc: new Token(ChainId.ARBITRUM, '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f', 8, 'WBTC', 'Wrapped BTC'),
    usdc: new Token(ChainId.ARBITRUM, '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', 6, 'USDC', 'USD Coin'),
};
