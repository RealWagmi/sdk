import { WETH9 } from '../constants/weth9';
import { ChainId } from '../constants/chains';
import invariant from 'tiny-invariant';
import { NativeCurrency } from './native-currency';
import { Currency } from './currency';
import { Token } from './token';

export class MetisNativeCurrency extends NativeCurrency {
    public constructor() {
        super(ChainId.METIS, 18, 'METIS', 'METIS');
    }

    public equals(other: Currency): boolean {
        return other.isNative && other.chainId === this.chainId;
    }

    get wrapped(): Token {
        const wrapped = WETH9[ChainId.METIS];
        invariant(wrapped instanceof Token);
        return wrapped;
    }
}
