import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const zkSyncTokens = {
    weth: new Token(ChainId.ZKSYNC, '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91', 18, 'WETH', 'Wrapped Ether'),
    usdc: new Token(ChainId.ZKSYNC, '0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4', 6, 'USDC', 'USD//C'),
    busd: new Token(ChainId.ZKSYNC, '0x2039bb4116B4EFc145Ec4f0e2eA75012D6C0f181', 18, 'cBUSD', 'Celer Network BUSD'),
    wagmi: new Token(ChainId.ZKSYNC, '0x3613AD277DF1d5935D41400A181Aa9ec1DC2Dc9e', 18, 'WAGMI', 'Wagmi'),
};
