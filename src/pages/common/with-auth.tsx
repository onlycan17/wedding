import { useRecoilState, useRecoilValue } from "recoil";
import { User, loginUser, userState } from "../common/state";
import { useRouter } from "next/router";
import { useEffect, ComponentType } from "react";
import logDev from "@/pages/config/log";
import { onAuthStateChanged } from "@firebase/auth";
import { auth, db } from "@/pages/config/firbase-setting";
import { collection, getDocs, query, where } from "firebase/firestore";

interface IProps {}

const WithAuth = (Component: ComponentType<IProps>) => {
  return function ProtectedRoute(props: IProps) {
    const [userState, setUserState] = useRecoilState(loginUser);
    //const [recoilUser, setRecoilUser] = useRecoilState<User | null>(userState);
    const router = useRouter();

    useEffect(() => {
      // logDev(`WithAuth user: ${JSON.stringify(user)}`);
      onAuthStateChanged(auth, async (user) => {
        console.log(user);
        if (user && userState === null) {
          console.log("userState is null");
          const fistNum = user.phoneNumber?.slice(3, 5);
          const secondNum = user.phoneNumber?.slice(5, 9);
          const thirdNum = user.phoneNumber?.slice(9, 13);
          const queryDate = query(
            collection(db, "userInfo"),
            // where("userNumber", "==", uniquenumber),
            where("userName", "==", user.displayName),
            where("email", "==", user.email),
            where("phoneNumFirst", "==", fistNum),
            where("phoneNumSecond", "==", secondNum),
            where("phoneNumThird", "==", thirdNum)
          );
          const querySnapshot = await getDocs(queryDate);
          querySnapshot.forEach((doc) => {
            const currentUser: User = {
              uid: user.uid,
              email: user.email,
              userName: user.displayName,
              phoneNumber: user.phoneNumber,
              userNumber: doc.data().userNumber,
              sex: doc.data().sex,
            };
            setUserState(currentUser);
          });
        } else if (user && userState) {
          return <Component {...props} />;
        } else {
          // setRecoilUser(null);
          router.push("/service/login"); // Or wherever your login route is
        }
      });
    }, [userState]);

    return <Component {...props} />;
  };
};

export default WithAuth;
