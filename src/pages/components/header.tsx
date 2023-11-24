import {useState, MouseEvent, FocusEvent, useEffect} from "react";
import Link from 'next/link';
import logDev from "@/pages/config/log";
import {dataMenu} from "@/pages/data/menu";
import {submenuListOne, submenuListTwo,submenuListThree, submenuListFour, submenuListFive, submenuListSix, submenuListSeven} from "@/pages/data/sub-menu";
import {onAuthStateChanged} from "@firebase/auth";
import {auth, db} from "@/pages/config/firbase-setting";
import {useRouter} from "next/router";
import {collection, getDocs, query, where} from "firebase/firestore";
import { useRecoilState } from "recoil";
import { loginUser } from "../common/state";


const Header: React.FC = () => {


    const [menuActive, setMenuActive] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [submenuHeight, setSubmenuHeight] = useState<number | null>(null);
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const router = useRouter();
    const [userName, setUserName] = useState<string | undefined>('');
    const [userState, setUserState] = useRecoilState(loginUser);


    console.log('-----------header-----------');
    console.log(userState);
    console.log('-----------header end-----------');

    useEffect(() => {
        logDev(`typeof window: ${typeof window}`);
        if (typeof window !== 'undefined') {
            const cmsGnb = document.getElementById("cms-gnb");
            if (cmsGnb) {
                const ulElement = cmsGnb.querySelector("ul");
                if (ulElement) {
                    setSubmenuHeight(ulElement.offsetHeight - 105);
                }
            }
        }
        // onAuthStateChanged(auth, async (user) => {
        //     if (user?.phoneNumber) {
        //         setIsLogin(true);
        //         console.log(`user: ${JSON.stringify(user)}`);
        //          const firstNum = user.phoneNumber?.slice(3, 5);
        //          const secondNum = user.phoneNumber?.slice(5, 9);
        //          const thirdNum = user.phoneNumber?.slice(9, 13);
        //          console.log(`firstNum: ${firstNum}`);
        //          console.log(`secondNum: ${secondNum}`);
        //          console.log(`thirdNum: ${thirdNum}`);
        //         const queryDate = query(
        //             collection(db, "userInfo"),
        //             where("phoneNumFirst", "==", firstNum),
        //             where("phoneNumSecond", "==", secondNum),
        //             where("phoneNumThird", "==", thirdNum),

        //         );
        //         const querySnapshot = await getDocs(queryDate);
        //         querySnapshot.forEach((doc) => {
        //             console.log(doc.id, " => ", doc.data());
        //            setUserName(doc.data().userName);
        //         });
        //     } else {
        //         setIsLogin(false);
        //     }
        // });
    }, []);

    const handleMouseOver = (index: number) => (_event: MouseEvent) => {
        setMenuActive(true);
        setActiveIndex(index);
    }

    const handleMouseLeave = () => (_event: MouseEvent) => {
        setMenuActive(false);
        setActiveIndex(null);
    }

    const handleFocus = (index: number) => (_event: FocusEvent) => {
        setMenuActive(true);
        setActiveIndex(index);
    }

    const handleLogout = async () => {
        console.log('logout');
        await auth.signOut();
        await setIsLogin(false);
        setUserState(null);
        await router.push('/service/login');
    }

    const submenuLists = [submenuListOne, submenuListTwo, submenuListThree, submenuListFour, submenuListFive, submenuListSix, submenuListSeven];
    return (
        <div id="header" className={menuActive ? 'open' : ''}>
            <div className="bottom">
                <div className="inner">
                    <h1 className={"logo"}>
                        <Link href="/">logo</Link>
                    </h1>
                    <div id="cms-gnb">
                        <ul>
                            {dataMenu.map((menu, index) => (
                                // eslint-disable-next-line react/jsx-key
                                <li
                                    key={index}
                                    className={`menu${index + 1} ${activeIndex === index ? 'on' : ''}`}
                                    onMouseOver={handleMouseOver(index)}
                                    onMouseLeave={handleMouseLeave()}
                                >
                                    <Link href="#" onFocus={handleFocus(index)}>
                                        {menu.title}
                                    </Link>
                                    <ul key={`ul_${index}`} style={{height: submenuHeight ? `${submenuHeight}px` : 'auto'}}>
                                        {submenuLists[index].map((subMenu, idx) => (
                                            <li key={`${index}_${idx}`} className="font_reset">
                                                <Link id={`menu-${index}-${idx}`}
                                                      href={`${subMenu.link}`}>{subMenu.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {isLogin ? <div id={"right_menu"}>
                        <Link href={"/service/mypage"}>{userName}님</Link>
                        <Link href={"#"} onClick={handleLogout}>로그아웃</Link>
                    </div>:<div id={"right_menu"}>
                        <Link href={"/service/login"}>Login</Link>
                        <Link href={"/service/joinStep1"}>Join</Link>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;
