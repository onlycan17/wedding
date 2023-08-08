import {useRecoilState} from 'recoil';
import {User, userState} from '../common/state';
import {useRouter} from 'next/router';
import {useEffect, ComponentType} from 'react';
import logDev from "@/pages/config/log";
import {onAuthStateChanged} from "@firebase/auth";
import {auth} from "@/pages/config/firbase-setting";

interface IProps {

}

const WithAuth = (Component: ComponentType<IProps>) => {
    return function ProtectedRoute(props: IProps) {
        // const user = useRecoilValue(loginUser);
        const [recoilUser, setRecoilUser] = useRecoilState<User | null>(userState);
        const router = useRouter();

        useEffect(() => {
            // logDev(`WithAuth user: ${JSON.stringify(user)}`);
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const currentUser: User = {
                        uid: user.uid,
                        email: user.email,
                        userName: user.displayName,
                        phoneNumber: user.phoneNumber,
                        uniqueNumber: user.uid,
                    };
                    setRecoilUser(currentUser);
                } else {
                    setRecoilUser(null);
                    router.push('/service/login'); // Or wherever your login route is
                }
            });
        }, [recoilUser]);

        return <Component {...props} />;
    };
};

export default WithAuth;