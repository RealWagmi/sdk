import { ChainId } from '../constants/chains';

export function isAvalanche(chainId: number): chainId is ChainId.AVALANCHE {
    return chainId === ChainId.AVALANCHE;
}
