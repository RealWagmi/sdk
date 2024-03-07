import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const optimismTokens = {
    weth: new Token(ChainId.OPTIMISM, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    wagmi: new Token(ChainId.OPTIMISM, '0xaf20f5f19698f1D19351028cd7103B63D30DE7d7', 18, 'WAGMI', 'Wagmi'),
    usdt: new Token(ChainId.OPTIMISM, '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58', 6, 'USDT', 'Tether USD'),
    usdc: new Token(ChainId.OPTIMISM, '0x0b2c639c533813f4aa9d7837caf62653d097ff85', 6, 'USDC', 'USD Coin'),
    wbtc: new Token(ChainId.OPTIMISM, '0x68f180fcce6836688e9084f035309e29bf0a2095', 8, 'WBTC', 'Wrapped BTC'),
    dai: new Token(ChainId.OPTIMISM, '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1', 18, 'DAI', 'Dai Stablecoin'),
};
