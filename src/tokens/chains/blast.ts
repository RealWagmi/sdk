import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';
import { zeroAddress } from 'viem';

export const blastTokens = {
    weth: new Token(ChainId.BLAST, '0x4300000000000000000000000000000000000004', 18, 'WETH', 'Wrapped Ether'),
    mim: new Token(ChainId.BLAST, '0x76da31d7c9cbeae102aff34d3398bc450c8374c1', 18, 'MIM', 'Magic Internet Money'),
    usdb: new Token(ChainId.BLAST, '0x4300000000000000000000000000000000000003', 18, 'USDB', 'USDB'),
    wagmi: new Token(ChainId.BLAST, zeroAddress, 18, 'WAGMI', 'Wagmi'),
};
