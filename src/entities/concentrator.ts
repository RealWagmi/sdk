import { Token } from '@uniswap/sdk-core';

export class Concentrator extends Token {
    public readonly token0: Token;
    public readonly token1: Token;

    public constructor(chainId: number, address: string, decimals: number, token0: Token, token1: Token) {
        super(chainId, address, decimals, 'WLP', `${token0.name}/${token1.name} WLP`);

        this.token0 = token0;
        this.token1 = token1;
    }
}
