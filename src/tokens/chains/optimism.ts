import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const optimismTokens = {
    weth: new Token(ChainId.OPTIMISM, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
};
