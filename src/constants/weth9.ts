import { WETH9 as DefaultWETH9, Token } from '@uniswap/sdk-core';
import { SupportedChainId } from './types';
import { fantomTokens, zkSyncTokens } from '../tokens';
/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH9: { [chainId: number]: Token } = {
    ...DefaultWETH9,
    [SupportedChainId.ZK_SYNC]: zkSyncTokens.weth,
    [SupportedChainId.FANTOM]: fantomTokens.wftm,
};
