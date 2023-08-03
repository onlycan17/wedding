import React, {ChangeEvent, useEffect, useState} from "react";
import Link from "next/link";
import styleModule from '@/pages/service/join_step3.module.css';
import * as yup from "yup";
import {useRouter} from "next/router";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import logDev from "@/pages/config/log";
import {getCurrentDate} from "@/pages/common/current-date";
import {doc} from "@firebase/firestore";
import {db} from "@/pages/config/firbase-setting";
import {updateDoc} from "firebase/firestore";

type FormFields = {
    payer: string;
    payType: string;
};

const schema = yup.object().shape({
    payer: yup.string().required('입금자명은 필수 입력 입니다.'),
    payType: yup.string().required('입금유무는 필수 입력 입니다.'),
});

const Join_step3: React.FC = () => {
    const router = useRouter();
    const dateRef = React.useRef<HTMLInputElement>(null);
    const timeRef = React.useRef<HTMLSelectElement>(null);
    const [checkPayType, setCheckPayType] = useState<string>('payFinish');
    const [errorPayDate, setErrorPayDate] = useState<string>('');
    const {register, getValues, handleSubmit, formState: {errors, defaultValues}} = useForm<FormFields>({
        resolver: yupResolver(schema),
    });
    useEffect(() => {
        logDev(`checkPayType: ${checkPayType}`);
        dateRef.current!.value = getCurrentDate();
    }, [checkPayType]);
    const handleJoinComplete : SubmitHandler<FormFields> = async (data: FormFields) => {
        logDev(`handleJoinComplete: ${JSON.stringify(data)}`);
        if(data.payType === 'payReady' && (dateRef.current!.value === '' || dateRef.current!.value === null)){
            setErrorPayDate('날짜를 선택해주세요.');
            return;
        }
        if(data.payType === 'payReady' && (timeRef.current!.value === '' || timeRef.current!.value === null)){
            setErrorPayDate('시간을 선택해주세요.');
            return;
        }

        const memberId = localStorage.getItem('memberId');
        // localStorage.setItem('memberId', memberId);
        const memberRef = doc(db, "membershipApplication", memberId!);
        await updateDoc(memberRef, {
            payer: data.payer,
            payType: data.payType,
            payDate: dateRef.current!.value,
            payTime: timeRef.current!.value,
            userStatusName: '신청',
            userStatus: 'new',
            createDate: Date.now().toString(),
        });
        localStorage.setItem('joinStep', '3');
        await router.push('/service/join_step4');
        }
    const handleRadioChange = () => {
        logDev(`handleRadioChange: ${checkPayType}`);
        setCheckPayType(checkPayType === 'payFinish' ? 'payReady' : 'payFinish');
    }

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
                <form onSubmit={handleSubmit(handleJoinComplete)}>
                    <div className="join_cont">
                        <fieldset className="fieldset_area2  form-wrap">
                            <legend>서류접수비</legend>
                            <table className="basic_table login_tb">
                                <colgroup>
                                    <col style={{width: "150px"}}/>
                                    <col style={{width: "250px"}}/>
                                    <col/>
                                    <col/>
                                </colgroup>
                                <tbody>
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
                                            <input type="text" className="inp w50pc "
                                                   placeholder="입금자명 입력해주세요." {...register('payer')} />
                                        </div>
                                        <span className="form_info  imp_red">
                                            {errors.payer ? errors.payer.message : defaultValues?.payer ? '입금 또는 입금하실 때 예상 입금자명을 정확하게 입력해주세요. 불일치 시 가입이 어려울 수 있습니다.' : ''}
                                        </span>
                                    </td>
                                </tr>


                                <tr>

                                    <th scope="col">입금유무 <em className="mark">(필수입력)</em></th>
                                    <td scope="col" colSpan={3}>
                                            <span className="bg-chk">
                                                <input type="radio" {...register('payType')} id={"payFinish"}
                                                        value={"payFinish"}
                                                       checked={checkPayType === 'payFinish'}
                                                       onClick={handleRadioChange}
                                                       className="imp"/>
                                                <label htmlFor="payFinish">입금완료</label>
                                            </span>
                                        <span className="bg-chk">
                                                <input type="radio" id="payReady" {...register('payType')}
                                                       value="payReady"
                                                         checked={checkPayType === 'payReady'}
                                                       onClick={handleRadioChange}
                                                       className="imp"/>
                                                <label htmlFor="payReady">입금예정 </label>
                                            </span>
                                    </td>
                                </tr>


                                <tr>
                                    <th scope="col">입금예상시간 <em className="mark">(필수입력)</em></th>
                                    <td scope="col" colSpan={3}>
                                        <div className="flex-container ">
                                                <div className={"mr20"}>
                                                    <span style={{
                                                        border: '1px solid #ccc',
                                                    }}>
                                                        <input type="date" min="2023-02-01"
                                                            max="2023-12-31"
                                                            className="inp w220px"
                                                            ref={dateRef}
                                                        />
                                                    </span>
                                                </div>
                                            <select className="select-sty h50px w200px" ref={timeRef}>
                                                <option value="">선택</option>
                                                <option value="am">오전</option>
                                                <option value="pm">오후</option>
                                                <option value="ng">저녁</option>
                                            </select>
                                        </div>
                                        <span className="form_info  imp_red">
                                            {errorPayDate}
                                        </span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <p className="form_info  imp_red mt30">입금 완료시 다음단계로 넘어가며 입금예정인 경우 입금 예정시간을 입력하셔야 다음단계로
                                넘어갑니다.</p>

                        </fieldset>
                        <div className="button-group a-c mt200">
                            <button type={"submit"} className="button extra border radius30 on ">다음단계</button>
                            {/*// <!-- class에 on 이 들어가면 색상변경 : 폼을 다 채우면  버튼 on색으로 변경						*/}
                            {/*// <a href="" class="button extra border radius30  on" onclick="">다음단계</a>  -->*/}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Join_step3;