import { WETH9 } from '../constants/weth9';
import { ChainId } from '../constants/chains';
import invariant from 'tiny-invariant';
import { NativeCurrency } from './native-currency';
import { Currency } from './currency';
import { Token } from './token';

export class SonicTestnetNativeCurrency extends NativeCurrency {
    public constructor() {
        super(ChainId.SONIC_TESTNET, 18, 'S', 'S');
    }

    public equals(other: Currency): boolean {
        return other.isNative && other.chainId === this.chainId;
    }

    get wrapped(): Token {
        const wrapped = WETH9[ChainId.SONIC_TESTNET];
        invariant(wrapped instanceof Token);
        return wrapped;
    }
}
