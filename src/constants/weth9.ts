import { ChainId } from './chains';
import { arbitrumTokens, avalancheTokens, bscTokens, ethereumTokens, fantomTokens, kavaTokens, optimismTokens, polygonTokens, zkSyncTokens, metisTokens } from '../tokens';

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
    [ChainId.METIS]: metisTokens.wmetis
};
