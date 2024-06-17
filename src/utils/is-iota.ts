import { ChainId } from '../constants/chains';

export function isIota(chainId: number): chainId is ChainId.IOTA {
    return chainId === ChainId.IOTA;
}
