import {useRecoilState, useRecoilValue} from 'recoil';
import {User, userState} from '../common/state';
import { useRouter } from 'next/router';
import { useEffect, ComponentType } from 'react';
import logDev from "@/pages/config/log";
import {onAuthStateChanged} from "@firebase/auth";
import {auth} from "@/pages/config/firbase-setting";

interface IProps {

}
const WithAuth  = (Component: ComponentType<IProps>) => {
    return function ProtectedRoute(props: IProps) {
        // const user = useRecoilValue(loginUser);
        const [recoilUser, setRecoilUser] = useRecoilState<User | null>(userState);
        const router = useRouter();

        useEffect(() => {
            // logDev(`WithAuth user: ${JSON.stringify(user)}`);
            const token = localStorage.getItem('token');
            if (token) {
                onAuthStateChanged(auth, (user) => {
                   if(user){
                       const currentUser: User = {
                            uid: user.uid,
                           token: token,
                            email: user.email,
                            userName: user.displayName,
                           phoneNumber: user.phoneNumber,
                           uniqueNumber: user.uid,
                       }
                       setRecoilUser(currentUser);
                   }else{
                       setRecoilUser(null);
                   }
                });
            }else{
                router.replace('/service/login'); // Or wherever your login route is
                return;
            }
        }, [recoilUser]);

        return <Component {...props} />;
    };
};

export default WithAuth;