import { ChainId } from '../constants/chains';

export function isSonic(chainId: number): chainId is ChainId.SONIC {
    return chainId === ChainId.SONIC;
}
