import Login from "@/pages/views/login";
import {useRecoilValue} from "recoil";
import {userState} from "@/pages/common/state";
import Main from "@/pages/views/main";
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
