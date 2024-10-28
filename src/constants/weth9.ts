import { ChainId } from './chains';
import { 
    arbitrumTokens, 
    avalancheTokens, 
    bscTokens, 
    ethereumTokens, 
    fantomTokens, 
    kavaTokens, 
    optimismTokens, 
    polygonTokens, 
    zkSyncTokens, 
    metisTokens,
    baseTokens, 
    metisSepoliaTokens,
    iotaTokens,
    sonicTestnetTokens
} from '../tokens';

import { Token } from '../entities';
/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH9 = {
    [ChainId.ETHEREUM]: ethereumTokens.weth,
    [ChainId.OPTIMISM]: optimismTokens.weth,
    [ChainId.BSC]: bscTokens.wbnb,
    [ChainId.POLYGON]: polygonTokens.wmatic,
    [ChainId.FANTOM]: fantomTokens.wftm,
    [ChainId.ZKSYNC]: zkSyncTokens.weth,
    [ChainId.KAVA]: kavaTokens.wkava,
    [ChainId.AVALANCHE]: avalancheTokens.wavax,
    [ChainId.ARBITRUM]: arbitrumTokens.weth,
    [ChainId.METIS]: metisTokens.wmetis,
    [ChainId.BASE]: baseTokens.weth,
    [ChainId.METIS_SEPOLIA]: metisSepoliaTokens.wmetis,
    [ChainId.IOTA]: iotaTokens.wiota,
    [ChainId.SONIC_TESTNET]: sonicTestnetTokens.ws,
} satisfies Record<ChainId, Token>;
