import { Token } from '../../entities/token';
import { ChainId } from '../../constants/chains';

export const kavaTokens = {
    wkava: new Token(ChainId.KAVA, '0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b', 18, 'WKAVA', 'Wrapped Kava'),
};
