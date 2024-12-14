import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const sonicTokens = {
    ws: new Token(ChainId.SONIC, '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38', 18, 'WS', 'Wrapped S'),
    wagmi: new Token(ChainId.SONIC, '0x0e0Ce4D450c705F8a0B6Dd9d5123e3df2787D16B', 18, 'WAGMI', 'Wagmi'),
};