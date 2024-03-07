import { sqrt } from './sqrt';

describe('utils/sqrt', () => {
    it('should return bigint', () => {
        expect(sqrt(100n)).toEqual(10n);
    });
});
