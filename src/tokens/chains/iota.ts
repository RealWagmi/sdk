import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';
import { zeroAddress } from 'viem';

export const iotaTokens = {
    weth: new Token(ChainId.IOTA, '0x160345fC359604fC6e70E3c5fAcbdE5F7A9342d8', 18, 'WETH', 'Wrapped Ether'),
    wagmi: new Token(ChainId.IOTA, zeroAddress, 18, 'WAGMI', 'Wagmi'),
    usdt: new Token(ChainId.IOTA, '0xC1B8045A6ef2934Cf0f78B0dbD489969Fa9Be7E4', 6, 'USDT', 'Tether USD'),
    usdc: new Token(ChainId.IOTA, '0xFbDa5F676cB37624f28265A144A48B0d6e87d3b6', 6, 'USDC', 'USD Coin'),
    wiota: new Token(ChainId.IOTA, '0x6e47f8d48a01b44DF3fFF35d258A10A3AEdC114c', 18, 'wIOTA', 'wIOTA'),
};
