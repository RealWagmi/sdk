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
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH9: { [chainId in ChainId]: Token } = {
    [ChainId.ETHEREUM]: ethereumTokens.weth,
    [ChainId.OPTIMISM]: optimismTokens.weth,
    [ChainId.BSC]: bscTokens.wbnb,
    [ChainId.POLYGON]: polygonTokens.wmatic,
    [ChainId.FANTOM]: fantomTokens.wftm,
    [ChainId.ZKSYNC]: zkSyncTokens.weth,
    [ChainId.KAVA]: kavaTokens.wkava,
    [ChainId.AVALANCHE]: avalancheTokens.wavax,
    [ChainId.ARBITRUM]: arbitrumTokens.weth,
};
