import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const polygonTokens = {
    wmatic: new Token(ChainId.POLYGON, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'WMATIC', 'Wrapped Matic'),
    wagmi: new Token(ChainId.POLYGON, '0x07Ed33a242BD9C08CA3C198e01189e35265024Da', 18, 'WAGMI', 'Wagmi'),
    usdc: new Token(ChainId.POLYGON, '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359', 6, 'USDC', 'USD Coin'),
    usdt: new Token(ChainId.POLYGON, '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', 6, 'USDT', '(PoS) Tether USD')
};
