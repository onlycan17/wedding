import {useState, useEffect, MouseEvent, FocusEvent} from "react";
import Link from 'next/link';

type SubmenuList = {
    seq: number;
    title: string;
    link: string;
}

const Header: React.FC = () => {


    const [menuActive, setMenuActive] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [submenuHeight, setSubmenuHeight] = useState<number | null>(null);
    const [subMenuList, setSubMenuList] = useState<SubmenuList[]>([]);
    const [submenuListOne, setSubmenuListOne] = useState<SubmenuList[]>([]);
    const [submenuListTwo, setSubmenuListTwo] = useState<SubmenuList[]>([]);
    const [submenuListThree, setSubmenuListThree] = useState<SubmenuList[]>([]);
    const [submenuListFour, setSubmenuListFour] = useState<SubmenuList[]>([]);
    const [submenuListFive, setSubmenuListFive] = useState<SubmenuList[]>([]);
    const [submenuListSix, setSubmenuListSix] = useState<SubmenuList[]>([]);

    useEffect(() => {
        const cmsGnb = document.getElementById("cms-gnb");
        if (cmsGnb) {
            const ulElement = cmsGnb.querySelector("ul");
            if (ulElement) {
                setSubmenuHeight(ulElement.offsetHeight - 105);
            }
        }
        setSubmenuListOne([
            {seq: 1, title: '짝꿍찾기', link: '/views/matching',},
            {seq: 2, title: '진행현황', link: '#',},
            {seq: 3, title: '-전체현황', link: '/views/matching',},
            {seq: 4, title: '-현재현황', link: '/views/matching',},
        ]);
        setSubmenuListTwo([
            {seq: 1, title: '채팅신청', link: '/views/matching',},
            {seq: 2, title: '화상신청', link: '/views/matching',},
            {seq: 3, title: '만남신청', link: '/views/matching',},
            {seq: 4, title: '면담신청', link: '/views/matching',},
        ]);
        setSubmenuListThree([
            {seq: 1, title: '간증', link: '/views/matching',},
            {seq: 2, title: '사전교육', link: '/views/matching',},
            {seq: 3, title: '결혼예배학교', link: '/views/matching',},
            {seq: 4, title: '생방송', link: '/views/matching',},
        ]);
        setSubmenuListFour([
            {seq: 1, title: '예식상담', link: '/views/matching',},
        ]);
        setSubmenuListFive([
            {seq: 1, title: '공지', link: '/views/matching',},
            {seq: 2, title: '자유게시판', link: '/views/matching',},
            {seq: 3, title: '질문과답변', link: '/views/matching',},
        ]);
        setSubmenuListSix([
            {seq: 1, title: '기본정보', link: '/views/matching',},
            {seq: 2, title: '개인프로필', link: '/views/matching',},
            {seq: 3, title: '매칭이력', link: '/views/matching',},
            {seq: 4, title: '서약서결과', link: '/views/matching',},
            {seq: 5, title: '질문현황', link: '/views/matching',},
        ]);
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

    const submenuLists = [submenuListOne, submenuListTwo, submenuListThree, submenuListFour, submenuListFive, submenuListSix];
    return (
        <div id="header" className={menuActive ? 'open' : ''}>
            <div className="bottom">
                <div className="inner">
                    <div id="cms-gnb">
                        <ul>
                            {['짝궁찾기', '매칭관리', '결혼예배학교', '상담실', '공지사항', '마이페이지'].map((title, index) => (
                                // eslint-disable-next-line react/jsx-key
                                <li
                                    className={`menu${index + 1} ${activeIndex === index ? 'on' : ''}`}
                                    onMouseOver={handleMouseOver(index)}
                                    onMouseLeave={handleMouseLeave()}
                                >
                                    <Link href="#" onFocus={handleFocus(index)}>
                                        {title}
                                    </Link>
                                    <ul style={{height: submenuHeight ? `${submenuHeight}px` : ''}}>
                                        {submenuLists[index].map((subMenu, idx) => (
                                            <li key={idx} className="font_reset">
                                                <Link id={`menu-${index}-${idx}`} href={`${subMenu.link}`}>{subMenu.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
