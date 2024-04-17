import { ChainId } from '../constants/chains';

export function isMetisSepolia(chainId: number): chainId is ChainId.METIS_SEPOLIA {
    return chainId === ChainId.METIS_SEPOLIA;
}
