import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const metisTokens = {
    wmetis: new Token(ChainId.METIS, '0x75cb093E4D61d2A2e65D8e0BBb01DE8d89b53481', 18, 'WMETIS', 'Wrapped METIS'),
    usdt: new Token(ChainId.METIS, '0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC', 6, 'm.USDT', 'USDT Token'),
    usdc: new Token(ChainId.METIS, '0xEA32A96608495e54156Ae48931A7c20f0dcc1a21', 6, 'm.USDC', 'USDC Token'),
    weth: new Token(ChainId.METIS, '0x420000000000000000000000000000000000000A', 18, 'WETH', 'Wrapped Ether'),
    wbtc: new Token(ChainId.METIS, '0xa5B55ab1dAF0F8e1EFc0eB1931a957fd89B918f4', 8, 'WBTC', 'Wrapped BTC'),
    wagmi: new Token(ChainId.METIS, '0xaf20f5f19698f1D19351028cd7103B63D30DE7d7', 18, 'WAGMI', 'Wagmi'),
};

export const metisSepoliaTokens = {
    wmetis: new Token(ChainId.METIS_SEPOLIA, '0xaf20f5f19698f1D19351028cd7103B63D30DE7d7', 18, 'WMETIS', 'Wrapped METIS'),
    weth: new Token(ChainId.METIS_SEPOLIA, '0x420000000000000000000000000000000000000A', 18, 'WETH', 'Wrapped Ether'),
    twagmi: new Token(ChainId.METIS_SEPOLIA, '0x8112E18a34b63964388a3B2984037d6a2EFE5B8A', 18, 'tWAGMI', 'tWAGMI'),
    tusdt: new Token(ChainId.METIS_SEPOLIA, '0x2dA5DdBeC63dfd93112AedFa44F880927AA5Ae41', 6, 'tUSDT', 'tUSDT'),
    tdai: new Token(ChainId.METIS_SEPOLIA, '0x0e0Ce4D450c705F8a0B6Dd9d5123e3df2787D16B', 18, 'tDAI', 'tDAI'),
};
