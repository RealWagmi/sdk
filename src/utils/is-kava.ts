import { ChainId } from '../constants/chains';

export function isKava(chainId: number): chainId is ChainId.KAVA {
    return chainId === ChainId.KAVA;
}
