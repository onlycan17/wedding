import React, {ChangeEvent, useEffect, useState} from "react";
import Link from "next/link";
import {useForm, SubmitHandler} from 'react-hook-form';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import logDev from "@/pages/config/log";


type FormFields = {
    userName: string;
    birthYear: string;
    birthMonth: string;
    birthDay: string;
    phoneFirst: string;
    phoneSecond: string;
    phoneThird: string;
    verifyCode: string;
};

const schema = yup.object().shape({
    userName: yup.string().required('본명은 필수 입력 입니다.'),
    birthYear: yup.string().required('년도는 필수 입력 입니다.'),
    birthMonth: yup.string().required('월은 필수 입력 입니다.'),
    birthDay: yup.string().required('일은 필수 입력 입니다.'),
    phoneFirst: yup.string().required('휴대폰 번호는 필수 입력 입니다.'),
    phoneSecond: yup.string().required('휴대폰 번호는 필수 입력 입니다.'),
    phoneThird: yup.string().required('휴대폰 번호는 필수 입력 입니다.'),
    verifyCode: yup.string().required('인증번호는 필수 입력 입니다.'),
});

const Join_step1: React.FC = () => {
    const [agree1, setAgree1] = useState(false);
    const [agree2, setAgree2] = useState(false);
    const [agree3, setAgree3] = useState(false);
    const [allAgree, setAllAgree] = useState(false);
    const [agreeCnt, setAgreeCnt] = useState(0);
    const [birthYear, setBirthYear] = useState<number>(new Date().getFullYear());
    const [birthMonth, setBirthMonth] = useState<number>(new Date().getMonth() + 1);
    const [birthDay, setBirthDay] = useState<number>(new Date().getDate());

    const [userName, setUserName] = useState('');
    const [proviName, setProviName] = useState('');
    const [sex, setSex] = useState('male');
    const [verifyCode, setVerifyCode] = useState('');



    const [phoneNumber, setPhoneNumber] = useState({
        first: '010',
        secont: '',
        third: ''
    });

    const {register, handleSubmit, formState: {errors}} = useForm<FormFields>({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        handleSexChange;
        logDev(`agreeCnt: ${agreeCnt} / allAgree: ${allAgree}`);
        if (agreeCnt === 3) {
            logDev('agreeCnt === 3')
            setAllAgree(true);
            setAgree1(true);
            setAgree2(true);
            setAgree3(true);
        } else {
            logDev('agreeCnt !== 3')
            setAllAgree(false);
            setAgree1(false);
            setAgree2(false);
            setAgree3(false);
        }
    }, [agreeCnt, allAgree, agree1, agree2, agree3]);

    const onSubmit: SubmitHandler<FormFields> = async ({
                                                           userName,
                                                           birthDay,
                                                           birthYear,
                                                           birthMonth,
                                                           phoneFirst,
                                                           phoneSecond,
                                                           phoneThird,
                                                           verifyCode
                                                       }) => {
        console.log({
            userName,
            proviName,
            birthYear,
            birthMonth,
            birthDay,
            phoneFirst,
            phoneSecond,
            phoneThird,
            verifyCode
        });
    };
    const handleBirthChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = event.target;

        if (name === 'birthYear') {
            setBirthYear(Number(value));
        } else if (name === 'birthMonth') {
            setBirthMonth(Number(value));
        } else if (name === 'birthDay') {
            setBirthDay(Number(value));
        }
    }


    const handleSexChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setSex(value);
    }

    const handleCertificationClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        console.log({
            userName,
            birthYear,
            birthMonth,
            birthDay,
            phoneNumber,
        });
    }

    const handleVerifyCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setVerifyCode(value);
    }
    const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {

    }


    function generateYears(startYear: number) {
        const currentYear = new Date().getFullYear();
        let years = [];
        while (startYear <= currentYear) {
            years.push(startYear++);
        }
        return years;
    }

    function generateNumbers(n: number) {
        return Array.from({length: n}, (_, i) => i + 1);
    }

    const years = generateYears(1950);
    const months = generateNumbers(12);
    const days = generateNumbers(31);

    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        logDev('handleCheck!!!!!');
        const {name, checked} = event.target;
        logDev(`${name}, ${checked}`);

            if (name === 'agree1') {
                setAgreeCnt(checked ? agreeCnt + 1 : agreeCnt - 1);
            }
            if (name === 'agree2') {
                setAgreeCnt(checked ? agreeCnt + 1 : agreeCnt - 1);
            }
            if (name === 'agree3') {
                setAgreeCnt(checked ? agreeCnt + 1 : agreeCnt - 1);
            }
            if (name === 'allAgree') {
                setAgreeCnt(checked ? 3 : 0);
            }
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
                <form onSubmit={handleSubmit(onSubmit)}>

                    <h3 className="sub_tit">본인인증 입력</h3>
                    <div className="join_cont">

                        <div className="fieldset_area2  form-wrap">
                            <legend>본인인증</legend>
                            <table className="basic_table login_tb">
                                <colgroup>
                                    <col style={{width: '250px'}}/>
                                    <col style={{width: '500px'}}/>
                                    <col style={{width: '100px'}}/>
                                    <col/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <th scope="col">
                                        본명 <em className="mark">(필수입력)</em>
                                        {errors.userName &&
                                            <span className={"imp_red"}>{errors.userName.message}</span>}
                                    </th>
                                    <td scope="col">
                                        <div className="inp-wrap ">
                                            <input
                                                type="text"
                                                className="inp w400px "
                                                placeholder="이름"
                                                id="realName"
                                                value={userName}
                                                {...register('userName')}
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
                                                id="proviedName"
                                                value={proviName}
                                            />
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <th scope="col">
                                        생년월일
                                        <em className="mark">(필수입력)</em>
                                        {errors.birthYear &&
                                            <span className={"imp_red"}>{errors.birthYear.message}</span>}
                                        {errors.birthMonth &&
                                            <span className={"imp_red"}>{errors.birthMonth.message}</span>}
                                        {errors.birthDay &&
                                            <span className={"imp_red"}>{errors.birthDay.message}</span>}
                                    </th>
                                    <td scope="col">
                                        <div className="inp-wrap  ">
                                            <div className="form-wrap birthday">

                  <span>
                    <select
                        id="birthYear"
                        title="년도  선택"
                        className="w110px"
                        value={birthYear}
                        {...register('birthYear')}
                    >
                      <option value="">년도</option>
                        {
                            /* 이부분에 날짜 옵션을 동적으로 생성하는 코드를 작성하세요. */
                            years.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))
                        }
                    </select>
                  </span>
                                                <span>
                    <select
                        id="birthMonth"
                        title="월  선택"
                        className="w110px"
                        value={birthMonth}
                        {...register('birthMonth')}
                    >
                      <option value="">월</option>
                        {
                            /* 이부분에 월 옵션을 동적으로 생성하는 코드를 작성하세요. */
                            months.map((month) => (
                                <option key={month} value={month}>{month}</option>
                            ))
                        }
                    </select>
                  </span>
                                                <span>
                    <select
                        id="birthDay"
                        title="일  선택"
                        className=" w110px"
                        value={birthDay}
                        {...register('birthDay')}
                    >
                      <option value="">일</option>
                        {
                            /* 이부분에 일 옵션을 동적으로 생성하는 코드를 작성하세요. */
                            days.map((day) => (
                                <option key={day} value={day}>{day}</option>
                            ))
                        }
                    </select>
                  </span>
                                            </div>
                                        </div>
                                    </td>
                                    <th style={{textAlign: 'center'}}>
                                        성별
                                    </th>
                                    <td style={{textAlign: 'center'}}>
                                    <span className="bg-chk">
                                        <input type="radio" id="male" name="sex" checked={sex === 'male'} value={"male"}
                                               onChange={handleSexChange}/><label htmlFor="male">남성 </label>
								    </span>
                                        <span className="bg-chk">
                                        <input type="radio" id="female" name="sex" checked={sex === 'female'}
                                               value={"female"} onChange={handleSexChange}/><label
                                            htmlFor="female">여성 </label>
								    </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="col">
                                        휴대폰 <em className="mark">(필수입력)</em>
                                        {errors.phoneFirst &&
                                            <span className={"imp_red"}>{errors.phoneFirst.message}</span>}
                                        {errors.phoneSecond &&
                                            <span className={"imp_red"}>{errors.phoneSecond.message}</span>}
                                        {errors.phoneThird &&
                                            <span className={"imp_red"}>{errors.phoneThird.message}</span>}
                                    </th>


                                    <td scope="col" colSpan={3}>
                                        <div className="form-wrap tel">
											<span>
												<select id="hpSeqNo" value="" title="통신사 번호를 선택해 주세요."
                                                        className="w110px" {...register('phoneFirst')}>
													<option value="010">010</option>
													<option value="011">011</option>
													<option value="016">016</option>
													<option value="017">017</option>
													<option value="018">018</option>
													<option value="019">019</option>
												</select>
											</span>
                                            <em className="dash">-</em>


                                            <span><input type="text" className="input-text a-l"
                                                         id="hpBurNo"
                                                         value="" maxLength={4} placeholder="입력"
                                                         title="휴대전화번호에서 중간번호를 입력해 주세요."
                                                         {...register('phoneSecond')}
                                            /></span>
                                            <em className="dash">-</em>

                                            <span><input type="text" className="input-text a-l" id="hpNo"
                                                         value="" maxLength={4} placeholder="입력"
                                                         title="휴대전화번호에서 마지막 번호를 입력해 주세요."
                                                         {...register('phoneThird')}
                                            /></span>


                                            <span><Link href="#"
                                                        className="button medium w150px  navy ml20">인증번호받기</Link></span>
                                        </div>

                                        <div className="form-wrap ">

                                        <span><input type="text" className="input-text a-l mt10"
                                                     maxLength={4} title=""
                                                     placeholder="인증번호" {...register('verifyCode')} /> </span>
                                            <label className={"imp_blue mt25 ml10"}>수신된 인증번호는 10분동안 유효합니다.</label>
                                        </div>

                                        <div>
                                        <span className="form_info  imp_red">
                                            축복식 진행 대상 확인 및 ID / PW 분실 등 본인 여부 확인이 필요할 경우을 위해 주민등록상의 이름, 생년월일을 입력해 주세요.<br/>
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
										<input type="checkbox" id="agree1" name="agree1" checked={agree1 ? true : false}  onChange={handleCheck} /><label
                                        htmlFor="agree1">[필수] 이용약관동의 </label>
									</span>
                            </div>

                            <div className="border-box v2 round mt10">

                                <div className="box-cont scroll-y">
                                    <div className="terms-area">
                                        <p>
                                            11기.....은 고지서 서비스를 위하여 귀하의 개인정보를 수집·이용하고자 하오니,수집·이용에 대한 내용을 자세히 읽어 보신 후 동의
                                            여부를
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
										<input type="checkbox" id="agree2" name="agree2" checked={agree2 ? true : false}  onChange={handleCheck} /><label htmlFor="agree2">[필수] 개인정보처리방침 동의 </label>
									</span>
                            </div>

                            <div className="border-box v2 round mt10">

                                <div className="box-cont scroll-y">
                                    <div className="terms-area">
                                        <p>
                                            11기.....은 고지서 서비스를 위하여 귀하의 개인정보를 수집·이용하고자 하오니,수집·이용에 대한 내용을 자세히 읽어 보신 후 동의
                                            여부를
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
										<input type="checkbox" id="agree3" name="agree3" checked={agree3 ? true : false}  onChange={handleCheck} /><label htmlFor="agree3">[선택] 마케팅 활용 동의   </label>
									</span>
                            </div>

                            <div className="border-box v2 round mt10">

                                <div className="box-cont scroll-y">
                                    <div className="terms-area">
                                        <p>
                                            11기.....은 고지서 서비스를 위하여 귀하의 개인정보를 수집·이용하고자 하오니,수집·이용에 대한 내용을 자세히 읽어 보신 후 동의
                                            여부를
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
									<input type="checkbox" id="allAgree" name="allAgree" checked={allAgree ? true : false}  onChange={handleCheck} /><label
                                    htmlFor="allAgree">위의 전체약관에 동의합니다. </label>
								</span>
                        </div>
                        <div className="button-group a-c mt200">
                            <Link href="" className="button extra border radius30" type={"submit"} >다음단계</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Join_step1;