import { Token } from '@uniswap/sdk-core';
import {
  V3_CORE_FACTORY_ADDRESSES,
  SupportedChainId,
  FeeAmount,
} from '../constants';
import { utils } from 'ethers';

const POOL_INIT_CODE_HASH =
  '0x0100133fbbcc76118ded62eff4d449702d57ec281d23a1ca9d40cf3b0de80644';
const CREATE2_PREFIX =
  '0x2020dba91b30cc0006188af794c2fb30dd8520db7e2c088b7fc7c103c00ca494';
const ZERO_INPUT_HASH =
  '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470';

interface Props {
  tokenA: Token;
  tokenB: Token;
  fee: FeeAmount;
}

/**
 * Computes a pool address
 * @param tokenA The first token of the pair, irrespective of sort order
 * @param tokenB The second token of the pair, irrespective of sort order
 * @param fee The fee tier of the pool
 * @returns The pool address
 */
export function computePoolAddressZkSync({
  tokenA,
  tokenB,
  fee,
}: Props): string {
  const [token0, token1] = tokenA.sortsBefore(tokenB)
    ? [tokenA, tokenB]
    : [tokenB, tokenA]; // does safety checks
  const salt = utils.keccak256(
    utils.defaultAbiCoder.encode(
      ['address', 'address', 'uint24'],
      [token0.address, token1.address, fee]
    )
  );
  const addressBytes = utils
    .keccak256(
      utils.concat([
        CREATE2_PREFIX,
        utils.zeroPad(V3_CORE_FACTORY_ADDRESSES[SupportedChainId.ZK_SYNC], 32),
        salt,
        POOL_INIT_CODE_HASH,
        ZERO_INPUT_HASH,
      ])
    )
    .slice(26);
  return utils.getAddress(addressBytes);
}
