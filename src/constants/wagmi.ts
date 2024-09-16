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
    blastTokens, 
    baseTokens, 
    metisSepoliaTokens, 
    zkLinkTokens,
    iotaTokens,
    sonicTestnetTokens
} from '../tokens';

import { Token } from '../entities';
/**
 * Known Wagmi implementation addresses
 */
export const WAGMI = {
    [ChainId.ETHEREUM]: ethereumTokens.wagmi,
    [ChainId.OPTIMISM]: optimismTokens.wagmi,
    [ChainId.BSC]: bscTokens.wagmi,
    [ChainId.POLYGON]: polygonTokens.wagmi,
    [ChainId.FANTOM]: fantomTokens.wagmi,
    [ChainId.ZKSYNC]: zkSyncTokens.wagmi,
    [ChainId.KAVA]: kavaTokens.wagmi,
    [ChainId.AVALANCHE]: avalancheTokens.wagmi,
    [ChainId.ARBITRUM]: arbitrumTokens.wagmi,
    [ChainId.METIS]: metisTokens.wagmi,
    [ChainId.BLAST]: blastTokens.wagmi,
    [ChainId.BASE]: baseTokens.wagmi,
    [ChainId.METIS_SEPOLIA]: metisSepoliaTokens.twagmi,
    [ChainId.ZKLINK]: zkLinkTokens.wagmi,
    [ChainId.IOTA]: iotaTokens.wagmi,
    [ChainId.SONIC_TESTNET]: sonicTestnetTokens.twagmi,
} satisfies Record<ChainId, Token>;
