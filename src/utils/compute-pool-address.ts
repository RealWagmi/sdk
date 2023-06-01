import { Token } from '@uniswap/sdk-core';
import { computePoolAddress as computePoolAddressDefault } from '@uniswap/v3-sdk';
import {
  V3_CORE_FACTORY_ADDRESSES,
  SupportedChainId,
  FeeAmount,
} from '../constants';

import { computePoolAddressZkSync } from './compute-pool-address-zksync';

const POOL_INIT_CODE_HASH =
  '0x30146866f3a846fe3c636beb2756dbd24cf321bc52c9113c837c21f47470dfeb';

interface Props {
  chainId: SupportedChainId;
  tokenA: Token;
  tokenB: Token;
  fee: FeeAmount;
}

export function computePoolAddress({ chainId, tokenA, tokenB, fee }: Props) {
  if (chainId !== SupportedChainId.ZK_SYNC) {
    return computePoolAddressDefault({
      factoryAddress: V3_CORE_FACTORY_ADDRESSES[chainId],
      tokenA,
      tokenB,
      fee,
      initCodeHashManualOverride: POOL_INIT_CODE_HASH,
    });
  }

  return computePoolAddressZkSync({ tokenA, tokenB, fee });
}
