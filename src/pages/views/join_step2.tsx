import React, {ChangeEvent, useState} from "react";
import Link from "next/link";

const Join_step2: React.FC = () => {
    return (
        <div>
            <div className="join_navi_top">
                <h2 className="sub_tit">회원가입</h2>
                <ul className="progressbar">
                    <li className="complate">본인인증</li>
                    <li className="active">기본정보입력</li>
                    <li className="">서류접수비</li>
                    <li className="">회원가입완료</li>
                </ul>
            </div>

            <div className="join_body">
                <h3 className="sub_tit">기본정보입력</h3>
                <div className="join_cont">

                    <fieldset className="fieldset_area2  form-wrap">
                        <legend>기본정보입력</legend>

                        <table className="basic_table login_tb">
                            <colgroup>
                                <col style={{width: '150px'}}/>
                                <col/>
                                <col style={{width: "150px"}}/>
                                <col/>
                            </colgroup>
                            <tbody>
                            <tr>
                                <th scope="col">비밀번호 <em className="mark">(필수입력)</em></th>
                                <td scope="col" colSpan={3}>
                                    <div className="inp-wrap ">
                                        <input type="text" className="inp w50pc " placeholder="영문, 숫자 혼합 8~15자 이내"
                                               id="" />
                                    </div>
                                    <span className="form_info  imp_red">
                                        영문/숫자/특수문자 조합으로 8자 이상 16자 이하로 작성,<br />
                                        사용가능 특수문자 = !@#$%^&*
                                    </span>
                                </td>
                            </tr>


                            <tr>
                                <th scope="col">비밀번호확인 <em className="mark">(필수입력)</em></th>
                                <td scope="col" colSpan={3}>
                                    <div className="inp-wrap ">
                                        <input type="text" className="inp w50pc " placeholder="영문, 숫자 혼합 8~15자 이내"
                                               id="" />
                                    </div>
                                    <span className="form_info  imp_red">비밀번호를 입력해주세요.</span>
                                </td>
                            </tr>


                            <tr>
                                <th scope="col">이메일 <em className="mark">(필수입력)</em></th>
                                <td scope="col" colSpan={3}>
                                    <div className="inp-wrap ">
                                        <input id="email" name="email" title="이메일 아이디를 입력해 주세요." className="inp w50pc"
                                               type="text" value="" />
                                    </div>
                                </td>
                            </tr>


                            <tr>
                                <th scope="col">소속교회 <em className="mark">(필수입력)</em></th>

                                <td scope="col" colSpan={3}>
                                    <div className="form-wrap ">
											<span>
												<select name="selectChurch" id="selectChurch" value=""
                                                        title="소속 지역회를 선택해 주세요." className="w200px">
													<option value="" selected={true}>지역회</option>
													<option value="서울서부">서울서부</option>
													<option value="서울남부">서울남부</option>
													<option value="서울북부">서울북부</option>
													<option value="부산">부산</option>
													<option value="대전">대전</option>
													<option value="금산">금산</option>
													<option value="인천">인천</option>
													<option value="대구">대구</option>
													<option value="광주">광주</option>
													<option value="강원">강원</option>
													<option value="경기">경기</option>
													<option value="충남">충남</option>
													<option value="전남동부">전남동부</option>
													<option value="전남서부">전남서부</option>
													<option value="전북">전북</option>
													<option value="경남동부">경남동부</option>
													<option value="경남서부">경남서부</option>
													<option value="경북동부울산">경북동부울산</option>
													<option value="경북서부">경북서부</option>
													<option value="제주">제주</option>
												</select>
											</span>


                                        <span>
												<select name="selectChurch" id="selectChurch" value=""
                                                        title="소속교회를 선택해 주세요." className="w200px">
													<option value="" selected={true}>교회</option>
													<option value="광주주빛나">광주주빛나</option>
													<option value="사파이어">사파이어</option>
													<option value="서울새벽별">서울새벽별</option>
												</select>
											</span>
                                    </div>
                                </td>
                            </tr>


                            <tr>
                                <th scope="col">소속부서 <em className="mark">(필수입력)</em></th>

                                <td scope="col" colSpan={3}>
                                    <div className="form-wrap ">
											<span>
												<select name="selectChurch" id="selectChurch" value=""
                                                        title="소속 지역회를 선택해 주세요." className="w200px">
													<option value="" selected={true}>부서 선택</option>
													<option value="선배가정국">선배가정국</option>
													<option value="5기가정국">5기가정국</option>
													<option value="7,8기가정국">7,8기가정국</option>
													<option value="9,10기가정국">9,10기가정국</option>
													<option value="장년부">장년부</option>
													<option value="청년부">청년부</option>
													<option value="대학부">대학부</option>
													<option value="중고등부">중고등부</option>
													<option value="유초등부">유초등부</option>
													<option value="은하수">은하수</option>
													<option value="군선교부">군선교부</option>
												</select>
											</span>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </fieldset>

                    <div className=" mt20">
							<span className="form_info  imp_blue">
                                축복식 진행 대상 확인 및 ID / PW 분실 등 본인 여부 확인이 필요할 경우을 위해 주민등록상의 이름, 생년월일을 입력해 주세요.<br />
							이름, 생년, 성별, 핸드폰 정보는 가입 이후에 수정하실 수 없습니다.
                            </span>
                    </div>


                    <div className="button-group a-c mt200">
                        <Link href="" className="button extra border radius30 on " >다음단계</Link>
                        {/*// <!-- class에 on 이 들어가면 색상변경 : 폼을 다 채우면  버튼 on색으로 변경*/}
                        {/*// <a href="" class="button extra border radius30  on" onclick="">다음단계</a>  -->*/}
                    </div>

                </div>
            </div>
        </div>
)
}

export default Join_step2;