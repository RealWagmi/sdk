import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const ethereumTokens = {
    weth: new Token(ChainId.ETHEREUM, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'),
    wagmi: new Token(ChainId.ETHEREUM, '0x92CC36D66e9d739D50673d1f27929a371FB83a67', 18, 'WAGMI', 'Wagmi'),
    usdc: new Token(ChainId.ETHEREUM, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD Coin'),
    usdt: new Token(ChainId.ETHEREUM, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD'),
    wbtc: new Token(ChainId.ETHEREUM, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, 'WBTC', 'Wrapped BTC'),
    dai: new Token(ChainId.ETHEREUM, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin'),
};
