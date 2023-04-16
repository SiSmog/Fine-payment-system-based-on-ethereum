import bs58 from 'bs58';
import { Buffer } from 'buffer';
function base58ToHex(base58str) {
  const decoded = Buffer.from(bs58.decode(base58str));
  const hexstr = '0x' + decoded.toString('hex');
  return hexstr;
}

export default base58ToHex
  