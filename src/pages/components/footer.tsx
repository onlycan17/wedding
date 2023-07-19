import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <div>
            <div className="section_wrap  section6">
                <div className="inner">
                    <div id="footer">
                        <div className="foot_wrap mt70">
                            <div className="foot_item  foot_left">
                                <h2 className="foot_logo">logo</h2>
                                <p>상담전화 0103424234234</p>
                                <div className="sns mt30">
                                    <Link href={"#"}><Image width={11} height={19}  src="/main/icon_fa.png"  alt="페이스북"/></Link>
                                    <Link href={"#"}><Image width={19} height={16} src="/main/icon_tw.png"  alt="트위터"/></Link>
                                    <Link href={"#"}><Image width={17} height={17} src="/main/icon_in.png"  alt="링크드인"/></Link>
                                    <Link href={"#"}><Image width={18} height={18} src="/main/icon_instar.png"  alt="인스타그램"/></Link>
                                </div>
                            </div>
                            <div className="foot_item foot_right">
                                <h2 className="tit">Contact</h2>
                                <p className="foot_txt mt40">충청남도 금산군...</p>
                                <p className="foot_txt2 mt40">
                                    <a href="#" className="foot_a"> 개인정보처리방침</a> 통신판매신고번호 2131231
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section_wrap  section7">
                <div className="inner">
                    <a href="#" className="scrollup">Scroll</a>
                    <div className="foot_copyright a-c">
                        <p>Copyright © 1171 | All righte 11기 결혼정보</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
