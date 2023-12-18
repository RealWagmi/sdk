import { ChainId } from '../constants/chains';

export function isMetis(chainId: number): chainId is ChainId.METIS {
    return chainId === ChainId.METIS;
}
