import Login from "@/pages/service/login";
import {useRecoilValue} from "recoil";
import {userState} from "@/pages/common/state";
import Main from "@/pages/service/main";
import logDev from "@/pages/config/log";

export default function Home() {
    const user = useRecoilValue(userState);
    logDev(`Home user: ${user}`);
    return (
        <div>
            {user ? <Main/> : <Login/>  }
        </div>
    )
}
