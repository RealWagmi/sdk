import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const optimismTokens = {
    weth: new Token(ChainId.OPTIMISM, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    wagmi: new Token(ChainId.OPTIMISM, '0xaf20f5f19698f1D19351028cd7103B63D30DE7d7', 18, 'WAGMI', 'Wagmi'),
};
