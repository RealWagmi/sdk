import { expect, test } from 'vitest';
import * as exportedNameSpaces from './index';

test('exports', () => {
    expect(Object.keys(exportedNameSpaces)).toMatchInlineSnapshot(`
        [
          "fantomTokens",
          "zkSyncTokens",
          "ethereumTokens",
          "optimismTokens",
          "bscTokens",
          "polygonTokens",
          "kavaTokens",
          "avalancheTokens",
          "arbitrumTokens",
          "metisTokens",
          "metisSepoliaTokens",
          "baseTokens",
          "iotaTokens",
          "sonicTokens",
          "sonicTestnetTokens",
          "NATIVE_CHAIN_ID",
          "DEFAULT_ERC20_DECIMALS",
        ]
	`);
});
