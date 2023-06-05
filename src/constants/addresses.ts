import { SupportedChainId } from './types';

type AddressMap = {
    [key in SupportedChainId]: string;
};

export const UNIVERSAL_ROUTER_ADDRESS: AddressMap = {
    [SupportedChainId.FANTOM]: '0x660FC63608A4641267e958Ee254DC0A275D0eD6e',
    [SupportedChainId.ZK_SYNC]: '0x718AeA365b83AFF91e561597ab9D4225f632b52a',
};

export const PERMIT2_ADDRESS: AddressMap = {
    [SupportedChainId.FANTOM]: '0x07Ed33a242BD9C08CA3C198e01189e35265024Da',
    [SupportedChainId.ZK_SYNC]: '0x87C0878B54c174199f438470FD74B3F7e1Def295',
};

export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
    [SupportedChainId.FANTOM]: '0xaf20f5f19698f1D19351028cd7103B63D30DE7d7',
    [SupportedChainId.ZK_SYNC]: '0x31be61CE896e8770B21e7A1CAFA28402Dd701995',
};

export const MULTICALL_ADDRESS: AddressMap = {
    [SupportedChainId.FANTOM]: '0xDb51CffFf3B989d0cB6b58AbF173371b6F2d0D24',
    [SupportedChainId.ZK_SYNC]: '0xFe32D6aA7708863Bf804EE65B489804317A5466c',
};

export const QUOTER_ADDRESSES: AddressMap = {
    [SupportedChainId.FANTOM]: '0x45C16C1fFA23662636D4050Eac16eB7AD7cBe29A',
    [SupportedChainId.ZK_SYNC]: '0x17A172bB5fb2BAf48b6AfD90191cDAaeF8c9A003',
};

export const QUOTER_V2_ADDRESSES: AddressMap = {
    [SupportedChainId.FANTOM]: '0x5dB68a533465040F5185e2771746AFed8CC4D14E',
    [SupportedChainId.ZK_SYNC]: '0x1e034f92e6d071941B58Ca15368adb8b8EBA6AAD',
};

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
    [SupportedChainId.FANTOM]: '0x5973C9E4cC849140cfd1c9dFc75D54D804B5a2fE',
    [SupportedChainId.ZK_SYNC]: '0xB2Bd4dB07731BA1517f3f43C4e8fe801F870B374',
};

export const TICK_LENS_ADDRESSES: AddressMap = {
    [SupportedChainId.FANTOM]: '0x209050d81Aad536Ca2092466B221013B8de7AC6c',
    [SupportedChainId.ZK_SYNC]: '0x09Cbf436DE2273dAC3f0971fB905aCBe41b1CC81',
};