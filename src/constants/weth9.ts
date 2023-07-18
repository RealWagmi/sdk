import { ChainId } from './chains';
import { fantomTokens } from '../tokens/chains/fantom';
import { zkSyncTokens } from '../tokens/chains/zksync';
import { Token } from '../entities';
/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH9: { [chainId in ChainId]?: Token } = {
    [ChainId.ZKSYNC]: zkSyncTokens.weth,
    [ChainId.FANTOM]: fantomTokens.wftm,
};
