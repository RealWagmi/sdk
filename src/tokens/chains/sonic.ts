import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const sonicTestnetTokens = {
    ws: new Token(ChainId.SONIC_TESTNET, '0xaf20f5f19698f1D19351028cd7103B63D30DE7d7', 18, 'WS', 'Wrapped S'),
    tweth: new Token(ChainId.SONIC_TESTNET, '0x576A1301B42942537d38FB147895fE83fB418fD4', 18, 'tWETH', 'tWETH'),
    twagmi: new Token(ChainId.SONIC_TESTNET, '0x8112E18a34b63964388a3B2984037d6a2EFE5B8A', 18, 'tWAGMI', 'tWAGMI'),
    tusdt: new Token(ChainId.SONIC_TESTNET, '0x2dA5DdBeC63dfd93112AedFa44F880927AA5Ae41', 6, 'tUSDT', 'tUSDT'),
    tdai: new Token(ChainId.SONIC_TESTNET, '0x0e0Ce4D450c705F8a0B6Dd9d5123e3df2787D16B', 18, 'tDAI', 'tDAI'),
};
