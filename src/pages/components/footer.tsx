import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const checkScrollTop = () => {
        if (!isVisible && window.pageYOffset > 100){
            setIsVisible(true);
        } else if (isVisible && window.pageYOffset <= 100){
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, []);
    return (
        <div>
            <div className="section_wrap  section6">
                <div className="inner">
                    <div id="footer">
                        <div className="foot_wrap mt70">
                            <div className="foot_item  foot_left">
                                <h2 className="foot_logo">logo</h2>
                                <p className={"footer_font mt25"}>카카오톡 상담 : jjagkkung1215</p>
                                <div className="sns mt05">
                                    <Link href={"#"}><Image width={11} height={19}  src="/main/icon_fa.png"  alt="페이스북"/></Link>
                                    <Link href={"#"}><Image width={19} height={16} src="/main/icon_tw.png"  alt="트위터"/></Link>
                                    <Link href={"#"}><Image width={17} height={17} src="/main/icon_in.png"  alt="링크드인"/></Link>
                                    <Link href={"#"}><Image width={18} height={18} src="/main/icon_instar.png"  alt="인스타그램"/></Link>
                                </div>
                            </div>
                            <div className="foot_item foot_right">
                                <h2 className="tit">Contact</h2>
                                <p className="footer_font mt15">충청남도 금산군 금산읍 인삼광장로 47, 8층(인삼호텔)</p>
                                <p className="footer_font foot_txt2 mt20">싱호명:결혼상담소 짝꿍 대표자: 윤영용</p>
                                <p className={"footer_font"}>결혼중개업 신고번호: ??????????</p>
                                <p className={"footer_font"}>사업자번호 : 374-62-00684</p>
                                <p className={"footer_font"}>통신판매신고번호 ????????</p>
                                {/*<p className="foot_txt2 mt40">*/}
                                {/*    <a href="#" className="foot_a"> 개인정보처리방침</a> 통신판매신고번호 2131231*/}
                                {/*</p>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section_wrap  section7">
                <div className={"footer_info mb20"}>
                    <div className={""}>
                        <Link href={""}>개인정보처리방침</Link>
                        <Link href={""}>이용약관</Link>
                        <Link href={""}>찾아오시는 길</Link>
                    </div>
                </div>
                <div className="inner">
                    <Link style={{display : isVisible ? 'block' : 'none'}} href="#" className="scrollup" onClick={scrollToTop}>Scroll</Link>
                    <div className="foot_copyright a-c">
                        <p className={"footer_font"}>Copyright ⓒ JJagKKung consulting service. all rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
