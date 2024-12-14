import { expect, test } from 'vitest';
import * as exportedNameSpaces from './index';

test('exports', () => {
    expect(Object.keys(exportedNameSpaces)).toMatchInlineSnapshot(`
          [
            "Ether",
            "FantomNativeCurrency",
            "BaseCurrency",
            "NativeCurrency",
            "Token",
            "Fraction",
            "Percent",
            "CurrencyAmount",
            "Price",
            "WrappedTokenInfo",
            "deserializeToken",
            "BscNativeCurrency",
            "PolygonNativeCurrency",
            "KavaNativeCurrency",
            "AvalancheNativeCurrency",
            "MetisNativeCurrency",
            "IotaNativeCurrency",
            "SonicNativeCurrency",
          ]
	`);
});
