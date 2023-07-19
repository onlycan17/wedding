import '../../styles/css/header.module.css';
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <div id="header" className="">
            <div className="bottom">
                <div className="inner">
                    <h1 className="logo">
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <Link href="/views/main">logo </Link>
                    </h1>
                    <div id="cms-gnb">
                        <ul>
                            <li className="menu1">
                                <Link href="" id="menu-1" title="짝궁찾기">짝궁찾기</Link>
                                <ul>
                                    <li className=" font_reset"><Link href="" id="menu-9" title="짝궁찾기">짝궁찾기</Link></li>
                                    <li className=" font_reset"><Link href="" id="menu-10" title="진행현황">진행현황</Link></li>
                                    <li className=" font_reset"><Link href="" id="menu-11" title="전체현황">-전체현황</Link></li>
                                    <li className=" font_reset"><Link href="" id="menu-11" title="현재현황">-현재현황</Link></li>
                                </ul>
                            </li>

                            <li className="menu2">
                                <Link href="#" id="menu-2" title="메칭관리">매칭관리</Link>
                                <ul>
                                    <li className=" font_reset"><Link href="" id="menu-14" title="채팅신청">채팅신청</Link></li>
                                    <li className=" font_reset"><Link href="" id="menu-14" title="화상신청">화상신청</Link></li>
                                    <li className=" font_reset"><Link href="" id="menu-14" title="만남신청">만남신청</Link></li>
                                    <li className=" font_reset"><Link href="" id="menu-14" title="면담신청">면담신청</Link></li>
                                </ul>
                            </li>

                            <li className="menu3">
                                <Link href="" id="menu-3" title="결혼예비학교">결혼예비학교</Link>
                                <ul>
                                    <li className=" font_reset"><Link href="" id="menu-20" title="간증">간증</Link></li>
                                    <li className=" font_reset"><Link href="" id="menu-20" title="사전교육">사전교육</Link></li>
                                    <li className=" font_reset"><Link href="" id="menu-20" title="결혼예비학교">결혼예비학교</Link></li>
                                    <li className=" font_reset"><Link href="" id="menu-20" title="생방송">생방송</Link></li>
                                </ul>
                            </li>

                            <li className="menu4">
                                <Link href="" id="menu-4" title="상담실">상담실</Link>
                                <ul>
                                    <li className=" font_reset"><Link href="" id="menu-20" title="예식상담">예식상담</Link></li>
                                </ul>
                            </li>

                            <li className="menu5">
                                <Link href="" id="menu-5" title="공지사항">공지사항</Link>
                                <ul>
                                    <li className=" font_reset"><Link href="" id="menu-20" title="공지">공지</Link></li>
                                    <li className=" font_reset"><Link href="" id="menu-20" title="자유게시판">자유게시판</Link></li>
                                    <li className=" font_reset"><Link href="" id="menu-20" title="질문과답변">질문과답변</Link></li>
                                </ul>
                            </li>

                            <li className="menu6">
                                <Link href="" id="menu-6" title="마이페이지">마이페이지</Link>
                                <ul>
                                    <li className=" font_reset"><Link href="" id="menu-20" title="기본정보">기본정보</Link></li>
                                    <li className=" font_reset"><Link href="" id="menu-20" title="개인프로필">개인프로필</Link></li>
                                    <li className=" font_reset"><Link href="" id="menu-20" title="매칭이력">매칭이력</Link></li>
                                    <li className=" font_reset"><Link href="" id="menu-20" title="서약서결과">서약서결과</Link></li>
                                    <li className=" font_reset"><Link href="" id="menu-20" title="질문현황">질문현황</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div id="right_menu">
                        <Link href={"/"}>Login</Link> <Link href={"/views/sign-up"}>sign up </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;