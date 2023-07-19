import { ChainId } from '../constants/chains';

export function isBsc(chainId: number): chainId is ChainId.BSC {
    return chainId === ChainId.BSC;
}
