import { ChainId } from '../constants/chains';
import { isPolygon } from './is-polygon';

describe('#isPolygon', () => {
    it('should return true', () => {
        expect(isPolygon(ChainId.POLYGON)).toStrictEqual(true);
    });
    it('should return false', () => {
        expect(isPolygon(ChainId.ZKSYNC)).toStrictEqual(false);
    });
});
