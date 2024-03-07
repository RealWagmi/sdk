import { expect, test } from 'vitest';
import * as exportedNameSpaces from './index';

test('exports', () => {
    expect(Object.keys(exportedNameSpaces)).toMatchInlineSnapshot(`
		[
		  "WETH9",
		  "ChainId",
		  "ChainType",
		  "TradeType",
		  "Rounding",
		  "ZERO",
		  "ONE",
		  "TWO",
		  "THREE",
		  "Project",
		  "WAGMI",
		  "STABLE_COINS",
		]
	`);
});
