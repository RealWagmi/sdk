import invariant from 'tiny-invariant';
import { ONE, THREE, TWO, ZERO } from '../constants/misc';

export function sqrt(y: bigint): bigint {
    invariant(y >= ZERO, 'NEGATIVE');

    let z: bigint = ZERO;
    let x: bigint;
    if (y > THREE) {
        z = y;
        x = y / TWO + ONE;
        while (x < z) {
            z = x;
            x = (y / x + x) / TWO;
        }
    } else if (y !== ZERO) {
        z = ONE;
    }
    return z;
}
