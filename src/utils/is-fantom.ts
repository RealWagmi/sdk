import { ChainId } from '../constants/chains';

export function isFantom(chainId: number): chainId is ChainId.FANTOM {
    return chainId === ChainId.FANTOM;
}
