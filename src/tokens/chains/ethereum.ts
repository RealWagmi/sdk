import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const ethereumTokens = {
    weth: new Token(ChainId.ETHEREUM, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'),
};
