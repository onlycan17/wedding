import {signOut} from "@firebase/auth";
import {auth} from "@/pages/config/firbase-setting";

export const Logout = () => {
  signOut(auth).then(() => {
     console.log("logout success");
  }).catch((error) => {
      console.log(error);
  });
}