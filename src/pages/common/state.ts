import {atom, selector} from 'recoil';
import {v1} from 'uuid';

export interface User {
    userName: string | null;
    uniqueNumber: string | null;
    email: string | null;
    phoneNumber: string | null;
    token: string | null;
    uid: string | null;
}
export const userState = atom<User | null>({
    key: `userState_${v1()}`,
    default: null,
});

// export const loginUser = selector<User | null>({
//     key: `loginUser_${v1()}`,
//     get: ({get}) => {
//         return get(userState);
//     },
//     set: ({set}, newValue) => {
//         set(userState, newValue);
//     },
// });

