import {useRecoilValue} from 'recoil';
import {userState} from '../common/state';
import { useRouter } from 'next/router';
import { useEffect, ComponentType } from 'react';
import logDev from "@/pages/config/log";

interface IProps {

}
const WithAuth  = (Component: ComponentType<IProps>) => {
    return function ProtectedRoute(props: IProps) {
        // const user = useRecoilValue(loginUser);
        const user = useRecoilValue(userState);
        const router = useRouter();

        useEffect(() => {
            // logDev(`WithAuth user: ${JSON.stringify(user)}`);
            logDev(`WithAuth user: ${user}`);
            if (user == null) {
                router.replace('/views/login'); // Or wherever your login route is
                return;
            }
        }, [user]);

        return <Component {...props} />;
    };
};

export default WithAuth;