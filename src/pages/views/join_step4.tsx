import React, {ChangeEvent, useState} from "react";
import Link from "next/link";
import styleModule from '@/pages/views/join_step3.module.css';

const Join_step4: React.FC = () => {
    return (
        <div>
            <div className="join_navi_top">
                <h2 className="sub_tit">회원가입</h2>
                <ul className="progressbar">
                    <li className="complate">본인인증</li>
                    <li className="complate">기본정보입력</li>
                    <li className="complate">서류접수비</li>
                    <li className="active">회원가입완료</li>
                </ul>
            </div>

            <div className="join_body complate">

                <div className="join_cont complate">
                    <div className="join_complate mt50">
                        <h3 className="sub_tit  icon_img">
                            <img src="/sub/join_complate.png" width="65" height="63" alt="" />
                        </h3>
                        <p className="tit1">
                            11기 대상자 여러분<br />
                            회원가입을 진심으로 축하드립니다.
                        </p>
                        <p className="mt30">
                            중앙부서에서 서류접수비 입금내역과 개인정보 검토 후<br />
                            승인하면 사용하실 수 있습니다.<br />
                            감사합니다.
                        </p>
                        <p className="imp2 mt70">
                            * 대상자 확인이 되면 이메일 또는 문자로 알려드리겠습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join_step4;