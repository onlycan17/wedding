import { selector } from 'recoil';
import { userState } from './state';

export const loginUser = selector({
    key: 'loginUser',
    get: ({ get }) => {
        return get(userState);
    },
    set: ({ set }, newValue) => {
        set(userState, newValue);
    },
});
