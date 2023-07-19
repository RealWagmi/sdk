import { ChainId } from '../constants/chains';

export function isPolygon(chainId: number): chainId is ChainId.POLYGON {
    return chainId === ChainId.POLYGON;
}
