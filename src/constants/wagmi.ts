import { ChainId } from './chains';
import { fantomTokens } from '../tokens/chains/fantom';
import { zkSyncTokens } from '../tokens/chains/zksync';
import { ethereumTokens } from '../tokens/chains/ethereum';
import { optimismTokens } from '../tokens/chains/optimism';
import { bscTokens } from '../tokens/chains/bsc';
import { polygonTokens } from '../tokens/chains/polygon';
import { kavaTokens } from '../tokens/chains/kava';
import { avalancheTokens } from '../tokens/chains/avalance';
import { arbitrumTokens } from '../tokens/chains/arbitrum';

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
};
