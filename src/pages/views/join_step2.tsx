import React, {ChangeEvent, useEffect, useState} from "react";
import Link from "next/link";
import {dataRegion} from "@/pages/data/region";
import {dataChurch, ChurchCode} from "@/pages/data/church";
import {dataDepartment} from "@/pages/data/department";
import {ChangeHandler, SubmitHandler, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {auth, db} from "@/pages/config/firbase-setting";
import {collection, getDocs, query, updateDoc, where} from "firebase/firestore";
import logDev from "@/pages/config/log";
import {useRouter} from "next/router";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {doc} from "@firebase/firestore";

type FormFields = {
    email: string;
    password: string;
    passwordConfirm: string;
};

const schema = yup.object().shape({
    email: yup.string().email('이메일 형식이 아닙니다.').required('이메일은 필수 입력 입니다.'),
    password: yup.string()
        .matches(/[a-z]/, '최소 하나 이상의 소문자가 필요 합니다.')
        .matches(/[A-Z]/, '최소 하나 이상의 대문자가 필요 합니다.')
        .matches(/\d+/, '최소 하나 이상의 숫자가 필요 합니다.')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, '최소 하나 이상의 특수문자가 필요 합니다.')
        .min(8, '최소 8자리이상의 비밀번호를 입력해주세요.')
        .required('패스워드는 필수 입력 입니다.'),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), undefined], '비밀번호가 일치하지 않습니다.').required('비밀번호 확인은 필수 입력 입니다.'),
});


const Join_step2: React.FC = () => {
    const router = useRouter();

    const [selectedRegion, setSelectedRegion] = useState<string>("");
    const [selectedChurch, setSelectedChurch] = useState<string>("");
    const [selectedDepartment, setSelectedDepartment] = useState<string>("");
    const [recentChurch, setRecentChurch] = useState<ChurchCode[]>([]);
    const [selectedError, setSelectedError] = useState<string>("");
    const {register, getValues, handleSubmit, formState: {errors, defaultValues}} = useForm<FormFields>({
        resolver: yupResolver(schema),
    });
    useEffect(() => {
        const memberId = localStorage.getItem('memberId');
        if (memberId === null || memberId === undefined || memberId === "") {
            router.push('/views/join_step1');
            return;
        }
    }, [recentChurch]);
    const onRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        logDev(`test value : ${event.target.value}`);
        const filterChurch = dataChurch.filter(value => value.regionCode === event.target.value);
        setRecentChurch([...filterChurch]);
        setSelectedRegion(event.target.value);
    }
    const onDepartmentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDepartment(event.target.value);
    }
    const onChurchChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedChurch(event.target.value);
    }

    const handleSubmitOverride: SubmitHandler<FormFields> = async ({email, passwordConfirm, password}) => {
        logDev(`email : ${email}, password : ${password}, passwordConfirm : ${passwordConfirm}`);
        if (selectedRegion === "" || selectedChurch === "" || selectedDepartment === "") {
            setSelectedError("지역, 교회, 부서를 선택해주세요.");
            return;
        }
        try{
            const result = await signInWithEmailAndPassword(auth, email, password);
            if (result.user.email) {
                alert("이미 가입된 이메일 입니다.");
                return;
            }
        } catch (e) {
            logDev(`error : ${e}`);

            const userCredential = await createUserWithEmailAndPassword(auth,email, password);
            logDev(`createUser : ${userCredential}`);
            if(userCredential.user){
                const memberId = localStorage.getItem('memberId');
                // localStorage.setItem('memberId', memberId);
                const memberRef = doc(db, "membershipApplication", memberId!);
                await updateDoc(memberRef, {
                    emailMemberId: userCredential.user.uid,
                    email: email,
                    region: selectedRegion,
                    church: selectedChurch,
                    department: selectedDepartment,
                });
                localStorage.setItem('joinstep', '2');
                router.push('/views/join_step3');
            }
        }
    }

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
                    <form onSubmit={handleSubmit(handleSubmitOverride)}>
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
                                    <th scope="col">이메일 <em className="mark">(필수입력)</em></th>
                                    <td scope="col" colSpan={3}>
                                        <div className="inp-wrap ">
                                            <input title="이메일 아이디를 입력해 주세요."
                                                   className="inp w50pc"
                                                   type="email" placeholder={"이메일 주소 입력 해주세요"}
                                                   {...register("email")}
                                            />
                                        </div>
                                        <span className="form_info  imp_red">
                                            {errors.email?.message}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="col">비밀번호 <em className="mark">(필수입력)</em></th>
                                    <td scope="col" colSpan={3}>
                                        <div className="inp-wrap ">
                                            <input type="password" className="inp w50pc "
                                                   placeholder="영문, 숫자 혼합 8~15자 이내"
                                                   {...register("password")}
                                            />
                                        </div>
                                        <span className="form_info  imp_red">
                                        {errors.password ? errors.password.message : defaultValues?.password === '' ? `영문/숫자/특수문자 조합으로 8자 이상 16자 이하로 작성, 
                                        사용가능 특수문자 = !@#$%^&*` : ''}
                                    </span>
                                    </td>
                                </tr>


                                <tr>
                                    <th scope="col">비밀번호확인 <em className="mark">(필수입력)</em></th>
                                    <td scope="col" colSpan={3}>
                                        <div className="inp-wrap ">
                                            <input type="password" className="inp w50pc "
                                                   placeholder="영문, 숫자 혼합 8~15자 이내"
                                                   {...register("passwordConfirm")}
                                            />
                                        </div>
                                        <span className="form_info  imp_red">
                                            {errors.passwordConfirm ? errors.passwordConfirm.message : defaultValues?.passwordConfirm === '' ? `비밀번호를 입력해주세요.` : ''}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="col">소속교회 <em className="mark">(필수입력)</em></th>

                                    <td scope="col" colSpan={3}>
                                        <div className="form-wrap ">
											<span>
												<select name={"region"} value={selectedRegion}
                                                        title="소속 지역회를 선택해 주세요." className="w200px"
                                                        onChange={onRegionChange}
                                                >
													<option value="">지역회</option>
                                                    {dataRegion.map((item, index) => (
                                                        <option key={index} value={item.code}>{item.name}</option>
                                                    ))}
												</select>
											</span>


                                            <span>
												<select name={"church"} value={selectedChurch}
                                                        title="소속교회를 선택해 주세요." className="w200px"
                                                        onChange={onChurchChange}
                                                >
													<option value="">교회</option>
                                                    {recentChurch.map((item, index) => (
                                                        <option key={index} value={item.code}>{item.name}</option>
                                                    ))}
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
												<select name={"department"} id="selectChurch" value={selectedDepartment}
                                                        title="소속 지역회를 선택해 주세요." className="w200px"
                                                        onChange={onDepartmentChange}
                                                >
													<option value="">부서 선택</option>
                                                    {dataDepartment.map((item, index) => (
                                                        <option key={index} value={item.code}>{item.name}</option>
                                                    ))}
												</select>
											</span>
                                        </div>
                                        <span className="form_info  imp_red">
                                            {selectedError}
                                        </span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </fieldset>

                        <div className=" mt20">
							<span className="form_info  imp_blue">
                                축복식 진행 대상 확인 및 ID / PW 분실 등 본인 여부 확인이 필요할 경우을 위해 주민등록상의 이름, 생년월일을 입력해 주세요.<br/>
							이름, 생년, 성별, 핸드폰 정보는 가입 이후에 수정하실 수 없습니다.
                            </span>
                        </div>


                        <div className="button-group a-c mt200">
                            <button type={"submit"}
                                    className="button extra border radius30 on ">다음단계
                            </button>
                            {/*// <!-- class에 on 이 들어가면 색상변경 : 폼을 다 채우면  버튼 on색으로 변경*/}
                            {/*// <a href="" class="button extra border radius30  on" onclick="">다음단계</a>  -->*/}
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Join_step2;