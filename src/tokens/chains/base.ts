import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';
import { zeroAddress } from 'viem';

export const baseTokens = {
    weth: new Token(ChainId.BASE, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    wagmi: new Token(ChainId.BASE, zeroAddress, 18, 'WAGMI', 'Wagmi'),
    mim: new Token(ChainId.BASE, '0x4a3a6dd60a34bb2aba60d73b4c88315e9ceb6a3d', 18, 'MIM', 'Magic Internet Money'),
    usdbc: new Token(ChainId.BASE, '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA', 6, 'USDbC', 'USD Base Coin'),
    usdc: new Token(ChainId.BASE, '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', 6, 'USDC', 'USD Coin')
};
