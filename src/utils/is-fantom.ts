import { SupportedChainId } from '../constants';

export function isFantom(chainId: number): chainId is SupportedChainId.FANTOM {
    return chainId === SupportedChainId.FANTOM;
}
