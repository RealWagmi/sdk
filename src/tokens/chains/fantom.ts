import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const fantomTokens = {
    wftm: new Token(ChainId.FANTOM, '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', 18, 'WFTM', 'WFTM'),
    usdc: new Token(ChainId.FANTOM, '0x04068da6c83afcfa0e13ba15a6696662335d5b75', 6, 'USDC', 'USD//C'),
    usdt: new Token(ChainId.FANTOM, '0x049d68029688eabf473097a2fc38ef61633a3c7a', 6, 'fUSDT', 'Frapped USDT'),
    dai: new Token(ChainId.FANTOM, '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e', 18, 'DAI', 'DAI'),
    frax: new Token(ChainId.FANTOM, '0xdc301622e621166bd8e82f2ca0a26c13ad0be355', 18, 'FRAX', 'FRAX'),
    wagmi: new Token(ChainId.FANTOM, '0xb1F795776cB9DdAC6E7e162f31C7419Dd3d48297', 18, 'WAGMI', 'Wagmi'),
};
