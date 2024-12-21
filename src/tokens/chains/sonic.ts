import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const sonicTokens = {
    ws: new Token(ChainId.SONIC, '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38', 18, 'WS', 'Wrapped S'),
    wagmi: new Token(ChainId.SONIC, '0x0e0Ce4D450c705F8a0B6Dd9d5123e3df2787D16B', 18, 'WAGMI', 'Wagmi'),
    usdce: new Token(ChainId.SONIC, '0x29219dd400f2Bf60E5a23d13Be72B486D4038894', 6, 'USDC.e', 'Bridged USDC (Sonic Labs) '),
    weth: new Token(ChainId.SONIC, '0x309C92261178fA0CF748A855e90Ae73FDb79EBc7', 18, 'WETH', 'Wrapped Ether'),
};