import {useState, MouseEvent, FocusEvent, useEffect} from "react";
import Link from 'next/link';
import logDev from "@/pages/config/log";
import {dataMenu} from "@/pages/data/menu";
import {submenuListOne, submenuListTwo,submenuListThree, submenuListFour, submenuListFive, submenuListSix, submenuListSeven} from "@/pages/data/sub-menu";


const Header: React.FC = () => {


    const [menuActive, setMenuActive] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [submenuHeight, setSubmenuHeight] = useState<number | null>(null);

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
                    <div id={"right_menu"}>
                        <Link href={"#"}>Login</Link>
                        <Link href={"#"}>Join</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
