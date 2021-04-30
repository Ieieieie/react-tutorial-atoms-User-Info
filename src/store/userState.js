import { atom } from 'recoil';

export const userState = atom({
    key: "userState", //参照するための一意のキー
    default: { isAdmin: false}
});
//これでグローバルsteteが可能