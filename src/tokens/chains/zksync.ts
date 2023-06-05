import { Token } from '@uniswap/sdk-core';
import { SupportedChainId } from '../../constants';

export const zkSyncTokens = {
    weth: new Token(SupportedChainId.ZK_SYNC, '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91', 18, 'WETH', 'Wrapped Ether'),
    usdc: new Token(SupportedChainId.ZK_SYNC, '0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4', 6, 'USDC', 'USD//C'),
    busd: new Token(SupportedChainId.ZK_SYNC, '0x2039bb4116B4EFc145Ec4f0e2eA75012D6C0f181', 18, 'cBUSD', 'Celer Network BUSD'),
};
