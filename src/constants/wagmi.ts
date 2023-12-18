import { ChainId } from './chains';
import { arbitrumTokens, avalancheTokens, bscTokens, ethereumTokens, fantomTokens, kavaTokens, optimismTokens, polygonTokens, zkSyncTokens, metisTokens } from '../tokens';

import { Token } from '../entities';
/**
 * Known Wagmi implementation addresses
 */
export const WAGMI: { [chainId in ChainId]: Token } = {
    [ChainId.ETHEREUM]: ethereumTokens.wagmi,
    [ChainId.OPTIMISM]: optimismTokens.wagmi,
    [ChainId.BSC]: bscTokens.wagmi,
    [ChainId.POLYGON]: polygonTokens.wagmi,
    [ChainId.FANTOM]: fantomTokens.wagmi,
    [ChainId.ZKSYNC]: zkSyncTokens.wagmi,
    [ChainId.KAVA]: kavaTokens.wagmi,
    [ChainId.AVALANCHE]: avalancheTokens.wagmi,
    [ChainId.ARBITRUM]: arbitrumTokens.wagmi,
    [ChainId.METIS]: metisTokens.wagmi
};
