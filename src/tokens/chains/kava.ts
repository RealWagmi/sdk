import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const kavaTokens = {
    wkava: new Token(ChainId.KAVA, '0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b', 18, 'WKAVA', 'Wrapped Kava'),
    wagmi: new Token(ChainId.KAVA, '0xaf20f5f19698f1D19351028cd7103B63D30DE7d7', 18, 'WAGMI', 'Wagmi'),
    usdc: new Token(ChainId.KAVA, '0xfa9343c3897324496a05fc75abed6bac29f8a40f', 6, 'USDC', 'USD Coin'),
    usdt: new Token(ChainId.KAVA, '0x919c1c267bc06a7039e03fcc2ef738525769109c', 6, 'USDt', 'TetherUSDt'),
    weth: new Token(ChainId.KAVA, '0x2DfD4dE5AE386Cd3f4fC8e2cb39240852E47F5E8', 18, 'WETH', 'Wrapped Ether'),
    atom: new Token(ChainId.KAVA, '0x15932E26f5BD4923d46a2b205191C4b5d5f43FE3', 6, 'ATOM', 'ATOM'),
};
