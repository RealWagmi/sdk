import { expect, test } from 'vitest';
import * as exportedNameSpaces from './index';

test('exports', () => {
    expect(Object.keys(exportedNameSpaces)).toMatchInlineSnapshot(`
        [
          "isFantom",
          "nativeOnChain",
          "validateAndParseAddress",
          "checkValidAddress",
          "sqrt",
          "sortedInsert",
          "tryParseAmount",
          "isBsc",
          "isPolygon",
          "isKava",
          "isAvalanche",
          "isMetis",
          "isMetisSepolia",
          "isIota",
          "isSonicTestnet",
        ]
	`);
});
