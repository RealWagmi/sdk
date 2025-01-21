import { ChainId } from '../constants/chains';

export function isZilliqa(chainId: number): chainId is ChainId.SONIC {
    return chainId === ChainId.ZILLIQA;
}
