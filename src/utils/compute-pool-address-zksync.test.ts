import { FeeAmount } from '../constants';
import { computePoolAddressZkSync } from './compute-pool-address-zksync';
import { zkSyncTokens } from '../tokens';

describe('#computePoolAddressZkSync', () => {
  it('should correctly compute the pool address', () => {
    const result = computePoolAddressZkSync({
      fee: FeeAmount.LOW,
      tokenA: zkSyncTokens.weth,
      tokenB: zkSyncTokens.usdc,
    });

    expect(result).toEqual('0x90B1b09A9715CaDbFD9331b3A7652B24BfBEfD32');
  });

  it('should correctly compute the pool address', () => {
    const resultA = computePoolAddressZkSync({
      fee: FeeAmount.LOW,
      tokenA: zkSyncTokens.weth,
      tokenB: zkSyncTokens.usdc,
    });
    const resultB = computePoolAddressZkSync({
      fee: FeeAmount.LOW,
      tokenA: zkSyncTokens.usdc,
      tokenB: zkSyncTokens.weth,
    });

    expect(resultA).toEqual(resultB);
  });
});
