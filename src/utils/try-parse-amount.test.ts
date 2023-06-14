import { fantomTokens } from '../tokens';
import tryParseAmount from './try-parse-amount';

describe('utils/tryParseAmount', () => {
    it('should be undefined when no valid input', () => {
        expect(tryParseAmount()).toBeUndefined();
    });
    it('should be undefined when input is 0', () => {
        expect(tryParseAmount('0.00')).toBeUndefined();
    });

    it('should pared value', () => {
        expect(tryParseAmount('100', fantomTokens.wftm)).toBeTruthy();
    });
});
