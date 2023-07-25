import React, {ChangeEvent, useState} from "react";
import Link from "next/link";

const Join_step1: React.FC = () => {
    const [birthYear, setBirthYear] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [birthDay, setBirthDay] = useState('');

    const [realName, setRealName] = useState('');
    const [userName, setUserName] = useState('');

    const [phoneNumber, setPhoneNumber] = useState({
        prefix: '010',
        first: '',
        second: ''
    });

    const handleBirthChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = event.target;

        if (name === 'birthYear') {
            setBirthYear(value);
        } else if (name === 'birthMonth') {
            setBirthMonth(value);
        } else if (name === 'birthDay') {
            setBirthDay(value);
        }
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        if (name === 'realName') {
            setRealName(value);
        } else if (name === 'userName') {
            setUserName(value);
        } else if (name.includes('phone')) {
            setPhoneNumber((prevState) => ({
                ...prevState,
                [name.split('-')[1]]: value
            }));
        }
    }

    const handleCertificationClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        console.log({
            realName,
            userName,
            birthYear,
            birthMonth,
            birthDay,
            phoneNumber,
        });
    }
    return (
        <div>
            <div className="join_navi_top">
                <h2 className="sub_tit">회원가입</h2>
                <ul className="progressbar">
                    <li className="active">본인인증</li>
                    <li>기본정보입력</li>
                    <li>서류접수비</li>
                    <li>회원가입완료</li>
                </ul>
            </div>

            <div className="join_body">

                <h3 className="sub_tit">본인인증 입력</h3>
                <div className="join_cont">

                    <div className="fieldset_area2  form-wrap">
                        <legend>본인인증</legend>

                        <table className="basic_table login_tb">
                            <colgroup>
                                <col style={{width: '150px'}}/>
                                <col/>
                                <col style={{width: '100px'}}/>
                                <col/>

                            </colgroup>
                            <tbody>
                            <tr>
                                <th scope="col">본명 <em className="mark">(필수입력)</em></th>
                                <td scope="col">
                                    <div className="inp-wrap ">
                                        <input
                                            type="text"
                                            className="inp w400px "
                                            placeholder="이름"
                                            id="realName"
                                            value={realName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <th scope="col">섭리명</th>
                                <td scope="col">
                                    <div className="inp-wrap ">
                                        <input
                                            type="text"
                                            className="inp w400px "
                                            placeholder="이름"
                                            id="userName"
                                            value={userName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <th scope="col">생년월일 <em className="mark">(필수입력)</em></th>
                                <td scope="col">
                                    <div className="inp-wrap  ">
                                        <div className="form-wrap birthday">

                  <span>
                    <select
                        id="birthYear"
                        name="birthYear"
                        title="년도  선택"
                        className="w110px"
                        value={birthYear}
                        onChange={handleBirthChange}
                    >
                      <option value="">년도</option>
                        {/* 이부분에 날짜 옵션을 동적으로 생성하는 코드를 작성하세요. */}
                    </select>
                  </span>
                                            <span>
                    <select
                        id="birthMonth"
                        name="birthMonth"
                        title="월  선택"
                        className="w60px"
                        value={birthMonth}
                        onChange={handleBirthChange}
                    >
                      <option value="">월</option>
                        {/* 이부분에 월 옵션을 동적으로 생성하는 코드를 작성하세요. */}
                    </select>
                  </span>
                                            <span>
                    <select
                        id="birthDay"
                        name="birthDay"
                        title="일  선택"
                        className=" w60px"
                        value={birthDay}
                        onChange={handleBirthChange}
                    >
                      <option value="">일</option>
                        {/* 이부분에 일 옵션을 동적으로 생성하는 코드를 작성하세요. */}
                    </select>
                  </span>
                                        </div>
                                    </div>
                                </td>
                                <th>성별</th>
                                <td>
                                    <span className="bg-chk">
									<input type="radio" id="male" name="sex"/><label
                                        htmlFor="male">남성 </label>
								</span>
                                    <span className="bg-chk">
									<input type="radio" id="female" name="sex"/><label
                                        htmlFor="female">여성 </label>
								</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">휴대폰 <em className="mark">(필수입력)</em></th>


                                <td scope="col" colSpan={3}>
                                    <div className="form-wrap tel">
											<span>
												<select name="hpSeqNo" id="hpSeqNo" value="" title="통신사 번호를 선택해 주세요."
                                                        className="w110px">
													<option value="010">010</option>
													<option value="011">011</option>
													<option value="016">016</option>
													<option value="017">017</option>
													<option value="018">018</option>
													<option value="019">019</option>
												</select>
											</span>
                                        <em className="dash">-</em>


                                        <span><input type="text" className="input-text a-l" name="hpBurNo" id="hpBurNo"
                                                     value="" maxLength={4} placeholder="입력"
                                                     title="휴대전화번호에서 중간번호를 입력해 주세요." /></span>
                                        <em className="dash">-</em>

                                        <span><input type="text" className="input-text a-l" name="hpNo" id="hpNo"
                                                     value="" maxLength={4} placeholder="입력"
                                                     title="휴대전화번호에서 마지막 번호를 입력해 주세요."
                                                     /></span>


                                        <span><Link href="#"
                                                 className="button medium w150px  navy ml20">인증번호받기</Link></span>
                                    </div>

                                    <div className="form-wrap ">

                                        <span><input type="text" className="input-text a-l mt10" name="" id="" value=""
                                                     maxLength={4} title=""
                                                     placeholder="인증번호" /> </span>
                                        <label className={"imp_blue mt25 ml10"}>수신된 인증번호는 10분동안 유효합니다.</label>
                                    </div>

                                    <div>
                                        <span className="form_info  imp_red">
                                            축복식 진행 대상 확인 및 ID / PW 분실 등 본인 여부 확인이 필요할 경우을 위해 주민등록상의 이름, 생년월일을 입력해 주세요.<br />
                                            이름, 생년, 성별, 핸드폰 정보는 가입 이후에 수정하실 수 없습니다.
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>


                    <h3 className="sub_tit2 mt100">약관 및 동의</h3>


                    {/*// <!-- 이용약관동의  시작 -->*/}
                    <div>
                        <div className="agree-area ">
									<span className="bg-chk">
										<input type="checkbox" id="ar1" name="ar_all"/><label
                                        htmlFor="ar1">[필수] 이용약관동의 </label>
									</span>
                        </div>

                        <div className="border-box v2 round mt10">

                            <div className="box-cont scroll-y">
                                <div className="terms-area">
                                    <p>
                                        11기.....은 고지서 서비스를 위하여 귀하의 개인정보를 수집·이용하고자 하오니,수집·이용에 대한 내용을 자세히 읽어 보신 후 동의 여부를
                                        결정하여 주시기 바랍니다.
                                    </p>
                                    <ol className="normal-num mt20">
                                        <li><em className="number">1.</em>
                                            <p className="s-tit">수집 및 이용목적</p>
                                            <p>신청 관리 </p>
                                        </li>
                                        <li><em className="number">2.</em>
                                            <p className="s-tit">수집 항목</p>
                                            <p>필수항목 : 본명, 생년월일, 휴대폰번호, </p>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*// <!-- 이용약관동의  끝 -->*/}


                    {/*// <!-- 개인정보처리방침  시작 -->*/}
                    <div className="mt50">
                        <div className="agree-area ">
									<span className="bg-chk">
										<input type="checkbox" id="ar2" name="ar_all"/><label htmlFor="ar2">[필수] 개인정보처리방침 동의 </label>
									</span>
                        </div>

                        <div className="border-box v2 round mt10">

                            <div className="box-cont scroll-y">
                                <div className="terms-area">
                                    <p>
                                        11기.....은 고지서 서비스를 위하여 귀하의 개인정보를 수집·이용하고자 하오니,수집·이용에 대한 내용을 자세히 읽어 보신 후 동의 여부를
                                        결정하여 주시기 바랍니다.
                                    </p>
                                    <ol className="normal-num mt20"> {/* !--2020 - 04 - 01 li 안에 숫자 em태그 삭제 -- */}
                                        <li><em className="number">1.</em>
                                            <p className="s-tit">수집 및 이용목적</p>
                                            <p>신청 관리 </p>
                                        </li>
                                        <li><em className="number">2.</em>
                                            <p className="s-tit">수집 항목</p>
                                            <p>필수항목 : 본명, 생년월일, 휴대폰번호, </p>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*// <!-- 개인정보처리방침 동의  끝 -->*/}


                    {/*// <!-- 마케팅 활용 동의  시작 -->*/}
                    <div className="mt50">
                        <div className="agree-area ">
									<span className="bg-chk">
										<input type="checkbox" id="ar3" name="ar_all"/><label htmlFor="ar3">[선택] 마케팅 활용 동의   </label>
									</span>
                        </div>

                        <div className="border-box v2 round mt10">

                            <div className="box-cont scroll-y">
                                <div className="terms-area">
                                    <p>
                                        11기.....은 고지서 서비스를 위하여 귀하의 개인정보를 수집·이용하고자 하오니,수집·이용에 대한 내용을 자세히 읽어 보신 후 동의 여부를
                                        결정하여 주시기 바랍니다.
                                    </p>
                                    <ol className="normal-num mt20">
                                        <li><em className="number">1.</em>
                                            <p className="s-tit">수집 및 이용목적</p>
                                            <p>신청 관리 </p>
                                        </li>
                                        <li><em className="number">2.</em>
                                            <p className="s-tit">수집 항목</p>
                                            <p>필수항목 : 본명, 생년월일, 휴대폰번호, </p>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*// <!-- 마케팅 활용 동의  끝 -->*/}


                    <div className="agree-area_all  mt40">
								<span className="bg-chk">
									<input type="checkbox" id="ar0" name="ar_all"/><label
                                    htmlFor="ar0">위의 전체약관에 동의합니다. </label>
								</span>

                    </div>


                    <div className="button-group a-c mt200">
                        <Link href="" className="button extra border radius30  ">다음단계</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Join_step1;