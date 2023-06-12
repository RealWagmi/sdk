import { checkValidAddress, validateAndParseAddress } from './validate-and-parse-address';

describe('#validateAndParseAddress', () => {
    it('returns same address if already checksummed', () => {
        expect(validateAndParseAddress('0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f')).toEqual('0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f');
    });

    it('returns checksummed address if not checksummed', () => {
        expect(validateAndParseAddress('0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f')).toEqual('0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f');
    });

    it('throws if not valid', () => {
        expect(() => validateAndParseAddress('0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6')).toThrow('0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6 is not a valid address.');
    });
});

describe('#checkValidAddress', () => {
    it('returns same address if valid', () => {
        expect(checkValidAddress('0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f')).toEqual('0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f');
    });

    it('throws if length < 42', () => {
        expect(() => checkValidAddress('0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6')).toThrow('0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6 is not a valid address.');
    });

    it('throws if length > 42', () => {
        expect(() => checkValidAddress('0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6fA')).toThrow('0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6fA is not a valid address.');
    });

    it('throws if it does not start with 0x', () => {
        //@ts-ignore
        expect(() => checkValidAddress('5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f')).toThrow('5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f is not a valid address.');
    });

    it('throws if it is not a HEX string', () => {
        expect(() => checkValidAddress('0x5C69bEe701ef814a2X6a3EDD4B1652CB9cc5aA6f')).toThrow('0x5C69bEe701ef814a2X6a3EDD4B1652CB9cc5aA6f is not a valid address.');
    });
});
