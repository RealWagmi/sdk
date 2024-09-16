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
export const STABLE_COINS= {
    [ChainId.ETHEREUM]: [ethereumTokens.usdt, ethereumTokens.usdc, ethereumTokens.dai],
    [ChainId.OPTIMISM]: [optimismTokens.usdt, optimismTokens.usdc, optimismTokens.dai],
    [ChainId.BSC]: [bscTokens.usdt, bscTokens.usdc],
    [ChainId.POLYGON]: [polygonTokens.usdt, polygonTokens.usdc],
    [ChainId.FANTOM]: [fantomTokens.usdt, fantomTokens.usdc, fantomTokens.frax, fantomTokens.dai],
    [ChainId.ZKSYNC]: [zkSyncTokens.usdc, zkSyncTokens.busd],
    [ChainId.KAVA]: [kavaTokens.usdt, kavaTokens.usdc],
    [ChainId.AVALANCHE]: [avalancheTokens.usdt, avalancheTokens.usdc],
    [ChainId.ARBITRUM]: [arbitrumTokens.usdt, arbitrumTokens.usdc, arbitrumTokens.usdc_e],
    [ChainId.METIS]: [metisTokens.usdt, metisTokens.usdc],
    [ChainId.BLAST]: [blastTokens.mim, blastTokens.usdb],
    [ChainId.BASE]: [baseTokens.usdbc, baseTokens.usdc, baseTokens.mim],
    [ChainId.METIS_SEPOLIA]: [metisSepoliaTokens.tusdt, metisSepoliaTokens.tdai],
    [ChainId.ZKLINK]: [zkLinkTokens.usdt, zkLinkTokens.usdc, zkLinkTokens.dai],
    [ChainId.IOTA]: [iotaTokens.usdt, iotaTokens.usdc],
    [ChainId.SONIC_TESTNET]: [sonicTestnetTokens.tusdt, sonicTestnetTokens.tdai]
} satisfies Record<ChainId, Token[]>;
