import { SupportedChainId } from '../constants';
import { isFantom } from './is-fantom';

describe('#isFantom', () => {
    it('should return true', () => {
        expect(isFantom(SupportedChainId.FANTOM)).toStrictEqual(true);
    });
    it('should return false', () => {
        expect(isFantom(SupportedChainId.ZK_SYNC)).toStrictEqual(false);
    });
});
