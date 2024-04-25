import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';
import { zeroAddress } from 'viem';

export const zkLinkTokens = {
    weth: new Token(ChainId.ZKLINK, '0x8280a4e7D5B3B658ec4580d3Bc30f5e50454F169', 18, 'WETH', 'Wrapped Ether'),
    wagmi: new Token(ChainId.ZKLINK, zeroAddress, 18, 'WAGMI', 'Wagmi'),
    usdt: new Token(ChainId.ZKLINK, '0x2F8A25ac62179B31D62D7F80884AE57464699059', 6, 'USDT', 'Nova Tether USD'),
    wbtc: new Token(ChainId.ZKLINK, '0xDa4AaEd3A53962c83B35697Cd138cc6df43aF71f', 8, 'WBTC', 'Nova Wrapped BTC'),
    usdc: new Token(ChainId.ZKLINK, '0x1a1A3b2ff016332e866787B311fcB63928464509', 6, 'USDC', 'Nova USD Coin'),
    dai: new Token(ChainId.ZKLINK, '0xF573fA04A73d5AC442F3DEa8741317fEaA3cDeab', 18, 'DAI', 'Nova Dai Stablecoin'),
};
