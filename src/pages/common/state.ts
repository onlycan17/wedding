import {atom, selector} from 'recoil';
import {v1} from 'uuid';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export interface User {
    userName: string | null;
    userNumber: string | null;
    email: string | null;
    phoneNumber: string | null;
    uid: string | null;
    sex: string | null;
}

export interface AdminUser {
    email: string | null;
}
export const userState = atom<User | null>({
    key: `userState_${v1()}`,
    default: null,
    effects_UNSTABLE: [persistAtom],
});
// export const userState = atom<User | null>({
//     key: 'userInfo01',
//     default: null,
// });

export const userStateAdmin = atom<AdminUser | null>({
    key: `userState_${v1()}`,
    default: null,
});

export const loginUser = selector<User | null>({
    key: `loginUser_${v1()}`,
    get: ({get}) => {
        return get(userState);
    },
    set: ({set}, newValue) => {
        set(userState, newValue);
    },
});

