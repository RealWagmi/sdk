import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const ethereumTokens = {
    weth: new Token(ChainId.ETHEREUM, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'),
    wagmi: new Token(ChainId.ETHEREUM, '0x92CC36D66e9d739D50673d1f27929a371FB83a67', 18, 'WAGMI', 'Wagmi'),
};
