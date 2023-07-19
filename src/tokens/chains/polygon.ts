import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const polygonTokens = {
    wmatic: new Token(ChainId.POLYGON, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'WMATIC', 'Wrapped Matic'),
};
