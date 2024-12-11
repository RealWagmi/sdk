import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';
import { zeroAddress } from 'viem';

export const sonicTokens = {
    ws: new Token(ChainId.SONIC, '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38', 18, 'WS', 'Wrapped S'),
    wagmi: new Token(ChainId.SONIC, zeroAddress, 18, 'WAGMI', 'Wagmi'),
};

export const sonicTestnetTokens = {
    ws: new Token(ChainId.SONIC_TESTNET, '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38', 18, 'WS', 'Wrapped S'),
    tweth: new Token(ChainId.SONIC_TESTNET, '0xeB45F8F06A3AD2C49C2f27a9b7b5044a6F482C8a', 18, 'tWETH', 'tWETH'),
    twagmi: new Token(ChainId.SONIC_TESTNET, '0x76bE4a7BB6872AdEA217cb92a3946996D589D0d3', 18, 'tWAGMI', 'tWAGMI'),
    tusdt: new Token(ChainId.SONIC_TESTNET, '0x7F7210EC3011213CE8f3665613AD0705Fb973a81', 6, 'tUSDT', 'tUSDT'),
    tanon: new Token(ChainId.SONIC_TESTNET, '0x30D9a07721a47Ff6a6AD35CB87F8643416c4d33A', 6, 'tANON', 'tANON'),
};
