import { ChainId } from '../constants/chains';

export function isSonicTestnet(chainId: number): chainId is ChainId.SONIC_TESTNET {
    return chainId === ChainId.SONIC_TESTNET;
}
