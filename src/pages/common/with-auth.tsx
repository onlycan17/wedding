import { useRecoilValue } from 'recoil';
import { loginUser } from '../common/state';
import { useRouter } from 'next/router';
import { useEffect, ComponentType } from 'react';

interface IProps {

}
const withAuth  = (Component: ComponentType<IProps>) => {
    return function ProtectedRoute(props: IProps) {
        const user = useRecoilValue(loginUser);
        const router = useRouter();

        useEffect(() => {
            if (!user) {
                router.push('/login'); // Or wherever your login route is
            }
        }, [user]);

        return <Component {...props} />;
    };
};

export default withAuth;