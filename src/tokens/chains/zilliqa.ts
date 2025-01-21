import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const zilliqaTokens = {
  wzil: new Token(ChainId.ZILLIQA, "0x5eEB9B0E2E2AdB0e8B39bbF6b00A9F73F0DDbea2", 12, 'WZIL', 'Wrapped ZIL'),
  weth: new Token(ChainId.ZILLIQA, '0x17D5af5658A24bd964984b36d28e879a8626adC3', 18, 'WETH', 'Wrapped Ether'),
  usdt: new Token(ChainId.ZILLIQA, '0x2274005778063684fbB1BfA96a2b725dC37D75f9', 6, 'USDT', 'Tether USD'),
  wbtc: new Token(ChainId.ZILLIQA, '0x2938fF251Aecc1dfa768D7d0276eB6d073690317', 8, 'WBTC', 'Wrapped BTC')
}
