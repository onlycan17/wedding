import {useRecoilState} from 'recoil';
import {AdminUser, userStateAdmin} from '../common/state';
import {useRouter} from 'next/router';
import {useEffect, ComponentType} from 'react';
import {onAuthStateChanged} from "@firebase/auth";
import {auth, db} from "@/pages/config/firbase-setting";
import {collection, getDocs, query, where} from "firebase/firestore";
import {Logout} from "@/pages/common/logout";

interface IProps {

}

const WithAuthAdmin = (Component: ComponentType<IProps>) => {
    return function ProtectedRoute(props: IProps) {
        // const user = useRecoilValue(loginUser);
        const [recoilUser, setRecoilUser] = useRecoilState<AdminUser | null>(userStateAdmin);
        const router = useRouter();

        useEffect(() => {
            // logDev(`WithAuth user: ${JSON.stringify(user)}`);
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const queryDate = query(
                        collection(db, "adminAuth"),
                        where("email", "==", user.email),
                    );
                    getDocs(queryDate).then((querySnapshot) => {
                        if(querySnapshot.empty){
                            Logout();
                            setRecoilUser(null);
                            router.push('/manager/login'); // Or wherever your login route is
                            return;
                        }
                    });
                    const currentUser: AdminUser = {
                        email: user.email,
                    };
                    setRecoilUser(currentUser);
                } else {
                    setRecoilUser(null);
                    await router.push('/manager/login'); // Or wherever your login route is
                }
            });
        }, []);

        return <Component {...props} />;
    };
};

export default WithAuthAdmin;