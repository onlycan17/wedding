import React, {ChangeEvent, useState} from "react";
import Link from "next/link";

const Join_step3: React.FC = () => {
    return (
        <div>
            <div className="join_navi_top">
                <h2 className="sub_tit">회원가입</h2>
                <ul className="progressbar">
                    <li className="complate">본인인증</li>
                    <li className="complate">기본정보입력</li>
                    <li className="active">서류접수비</li>
                    <li className="">회원가입완료</li>
                </ul>
            </div>

            <div className="join_body">
                <h3 className="sub_tit">기본정보입력</h3>
                <div className="join_cont">
                    <fieldset className="fieldset_area2  form-wrap">
                        <legend>서류접수비</legend>
                        <table className="basic_table login_tb">
                            <colgroup>
                                <col style={{width: "150px"}}/>
                                <col/>
                                <col style={{width: "150px"}}/>
                                <col/>
                            </colgroup>
                            <tr>
                                <th scope="col">서류접수비</th>
                                <td scope="col" colSpan={3}>
                                    <div className="txt-wrap ">
                                        <p>서류접수비 : 110,000원</p>
                                        <p>계좌번호 : 농협 1234-56-7890 </p>
                                        <p>계좌명 : 결혼상담소 짝꿍</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">입금자명 <em className="mark">(필수입력)</em></th>
                                <td scope="col" colSpan={3}>
                                    <div className="inp-wrap ">
                                        <input type="text" className="inp w50pc " placeholder="입금자명 입력해주세요." id=""/>
                                    </div>
                                    <span className="form_info  imp_red">
                                        입금 또는 입금하실 때 예상 입금자명을 정확하게 입력해주세요.<br/>
                                        불일치 시 가입이 어려울 수 있습니다.
                                    </span>
                                </td>
                            </tr>


                            <tr>

                                <th scope="col">입금유무 <em className="mark">(필수입력)</em></th>
                                <td scope="col" colSpan={3}>

										<span className="bg-chk">
											<input type="radio" id="money_ed" name="money_radio2" value=""
                                                   className="imp"/>
											<label htmlFor="money_ed">입금완료</label>
										</span>
                                    <span className="bg-chk">
											<input type="radio" id="money_ing" name="money_radio2" value=""
                                                   className="imp"/>
											<label htmlFor="money_ing">입금예정 </label>
										</span>

                                </td>
                            </tr>


                            <tr>
                                <th scope="col">입금예상시간 <em className="mark">(필수입력)</em></th>


                                <td scope="col" colSpan={3}>
                                    <div className="form-wrap ">
											<span className="bg-chk">
												<input type="date" value="2023-02-15" min="2023-02-01" max="2023-12-31"
                                                       className="inp w220px "/>
											</span>

                                    </div>
                                </td>
                            </tr>

                        </table>

                        <p className="form_info  imp_red mt30">입금 완료시 다음단계로 넘어가며 입금예정인 경우 입금 예정시간을 입력하셔야 다음단계로
                            넘어갑니다.</p>

                    </fieldset>
                    <div className="button-group a-c mt200">
                        <Link href="" className="button extra border radius30 on " >다음단계</Link>
                        {/*// <!-- class에 on 이 들어가면 색상변경 : 폼을 다 채우면  버튼 on색으로 변경						*/}
                        {/*// <a href="" class="button extra border radius30  on" onclick="">다음단계</a>  -->*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join_step3;