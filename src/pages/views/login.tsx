import {auth, db} from "@/pages/config/firbase-setting";
import {useForm, SubmitHandler} from 'react-hook-form';
import {PhoneAuthProvider, RecaptchaVerifier, signInWithCredential, signInWithPhoneNumber} from "firebase/auth";
import {signInWithEmailAndPassword} from "firebase/auth";
import {collection, query, where, getDocs} from 'firebase/firestore';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import React, {useEffect, useState} from "react";
import logDev from "@/pages/config/log";
import {useRecoilState} from "recoil";
import {userState} from "@/pages/common/state";
import {useRouter} from "next/router";
import styles from '../../styles/css/login.module.css';
import Cookies from "js-cookie";
import Link from "next/link";
import Modal from "@/pages/common/modal";

type FormFields = {
    uniquenumber: string;
    username: string;
    email: string;
    password: string;
};

const schema = yup.object().shape({
    uniquenumber: yup.string().required('고유번호(아이디)는 필수 입력 입니다.'),
    username: yup.string().required('이름(본명)은 필수 입력 입니다.'),
    email: yup.string().email().required('이메일은 필수 입력 입니다.'),
    password: yup.string().min(8)
        .matches(/[a-z]/, '최소 하나 이상의 소문자가 필요 합니다.')
        .matches(/[A-Z]/, '최소 하나 이상의 대문자가 필요 합니다.')
        .matches(/\d+/, '최소 하나 이상의 숫자가 필요 합니다.')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, '최소 하나 이상의 특수문자가 필요 합니다.')
        .min(8, '최소 8자리이상의 비밀번호를 입력해주세요.')
        .required('비밀번호는 필수 입력 입니다.'),
});

const TIMEOUT_SECONDS = 60;

const Login: React.FC = () => {
    const [timeRemaining, setTimeRemaining] = useState(TIMEOUT_SECONDS);
    const [user, setUser] = useRecoilState(userState);
    const [isReadOnly, setIsReadOnly] = useState(true);
    const [verificationId, setVerificationId] = useState('');
    const [userName, setUserName] = useState(Cookies.get('userName') ?? '');
    const [uniqueNumber, setUniqueNumber] = useState(Cookies.get('uniqueNumber') ?? '');
    const [getEmail, setEmail] = useState<string | null>(Cookies.get('email') ?? null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const router = useRouter();
    const [selected, setSelected] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [firebaseError, setFirebaseError] = React.useState<string | null>(null);

    const {register, handleSubmit, formState: {errors}} = useForm<FormFields>({
        resolver: yupResolver(schema),
    });
    // let recaptchaVerifier: RecaptchaVerifier | null = null;
    logDev(`Login user: ${user}`);
    useEffect(() => {
        logDev(`Login useEffect user: ${user}`);
        if (user != null) {
            router.replace('/views/main');
        }
        if (timeRemaining > 0) {
            const timerId = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
            return () => clearTimeout(timerId);
        }
        setTimeRemaining(TIMEOUT_SECONDS);
    }, []);
    const onSubmit: SubmitHandler<FormFields> = async ({uniquenumber, username, email, password}) => {
        const queryDate = query(
            collection(db, "userInfo"),
            where("uniqueNumber", "==", uniquenumber),
            where("userName", "==", username),
        );
        const querySnapshot = await getDocs(queryDate);
        if (querySnapshot.empty) {
            // doc.data() will be undefined in this case
            logDev("고유번호나 성명이 일치하지 않습니다.");
            // const docRef = await addDoc(collection(db, "usersInfo"), {
            //     uniquenumber: uniquenumber,
            //     username: username,
            //     password: password
            // });
            // console.log("Document written with ID: ", docRef.id);
            setFirebaseError("고유번호나 성명이 일치하지 않습니다.");
            return;
        } else {
            logDev('UniqueNumber and UserName is correct !!!!!');
            try {
                const result = await signInWithEmailAndPassword(auth, email, password);
                const idToken = await result.user.getIdToken();
                if (idToken) {
                    logDev('success idToken !!!!!');
                    logDev(idToken);
                    querySnapshot.forEach((doc) => {
                        logDev(`${doc.id} => ${doc.data()} `);
                        logDev('phoneNumber : ' + doc.data().phoneNumber);
                        logDev('userName : ' + doc.data().userName);
                        logDev('uniqueNumber : ' + doc.data().uniqueNumber);
                        logDev('doc email : ' + doc.data().email);
                        logDev('email : ' + email);
                        logDev('email// : ' + result.user.email);
                        setPhoneNumber(doc.data().phoneNumber);
                        setUserName(doc.data().userName);
                        setUniqueNumber(doc.data().uniqueNumber);
                        setEmail(result.user.email);
                        openModal();
                    });
                }
            } catch (e) {
                console.log(e);
                setFirebaseError('Email 또는 비밀번호가 일치하지 않습니다.');
                return;
            }
        }

    };

    const [otp, setOtp] = useState('');
    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        logDev('event handleOtpChange');
        setOtp(e.target.value);
    }
    const onVerifyOTP = async () => {
        logDev('event onVerifyOTP');
        try {
            logDev(`otp : ${otp}`);
            logDev(`verificationId : ${verificationId}`);
            const credential = PhoneAuthProvider.credential(verificationId, otp);
            const result = await signInWithCredential(auth, credential);
            logDev(result);
            logDev('success OTP !!!!!');
            const accessToken = await result.user.getIdToken();
            localStorage.setItem('token', accessToken);

            //logDev('result user email : ' + getEmail);
            // const userInfo = {
            //    email: getEmail,
            //     phoneNumber: phoneNumber,
            //     uid: result.user.uid,
            //     token: accessToken,
            //     userName: userName,
            //     uniqueNumber: uniqueNumber,
            // }

            //setUser(userInfo);
            setIsModalOpen(false);
            closeModal();

            logDev(accessToken);

            await router.push('/views/main');
        } catch (error) {
            // Handle errors here.
            console.log(error);
            setFirebaseError('인증번호가 일치하지 않습니다.');
        }
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(event.target.checked);
        if (event.target.checked) {
            if (typeof uniqueNumber === "string") {
                Cookies.set('uniqueNumber', uniqueNumber);
            }
            if (typeof userName === "string") {
                Cookies.set('userName', userName);
            }
            if (getEmail != null) {
                Cookies.set('email', getEmail);
            }
        }
    };
    const openModal = async () => {
        setIsModalOpen(true);
    };
    const closeModal = () => setIsModalOpen(false);

    const handleRequestNumber = async () => {
        try {
            const rec = new RecaptchaVerifier(auth, 'sign-in-button', {
                'size': 'invisible',
                'callback': (response: any) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    logDev('recaptchaVerifier callback !!!!!');
                    console.log(response);
                    //onVerifyOTP();
                }
            });
            //setRecaptchaVerifier();
            logDev('phoneNumber verifier!!!!!');
            logDev(rec);
            if (rec == null) {
                setFirebaseError('인증번호 전송에 실패하였습니다. 관리자에게 문의하세요.');
                return;
            }

            // console.log(confirmData);
            logDev(`phoneNumber : +82${phoneNumber}`);

            const confirmData = await signInWithPhoneNumber(auth, `+82${String(phoneNumber)}`, rec);
            setVerificationId(confirmData.verificationId);
            // setLoginStep(2);
            logDev('success phone number !!!!!');
            logDev(confirmData);
            setIsReadOnly(false);
        } catch (e) {
            logDev('error phone number !!!!!');
            logDev(e);
        }
    }

    return (
        <div className={`${styles.login_body} pt50`}>
            <h2 className={"sub_tit"}>로그인</h2>
            <div className={styles.login_cont}>
                <div role={"group"} className={"fieldset_area2 phone_area"}>
                    <form className={styles.login_tb} onSubmit={handleSubmit(onSubmit)}>
                        <div className={"inp-wrap"}>
                            <label className={styles.input_label}>고유번호(아이디)</label>
                            <input className={"inp"} type="text" {...register("uniquenumber")}
                                   placeholder={"고유번호를 입력해주세요"}/>
                            {errors.uniquenumber &&
                                <span className={"imp_red"}>{errors.uniquenumber.message}</span>}
                        </div>
                        <div className={"inp-wrap"}>
                            <label className={styles.input_label}>이름(본명)</label>
                            <input className={"inp"} type="text" {...register("username")}
                                   placeholder={"이름(본명)을 입력하세요"}/>
                            {errors.username && <span className={"imp_red"}>{errors.username.message}</span>}
                        </div>
                        <div className={"inp-wrap"}>
                            <label className={styles.input_label}>Email</label>
                            <input className={"inp"} type="email" {...register("email")}
                                   placeholder={"이메일을 입력하세요"}/>
                            {errors.username && <span className={"imp_red"}>{errors.username.message}</span>}
                        </div>
                        <div className={"inp-wrap"}>
                            <label className={styles.input_label}>비밀번호</label>
                            <input className={"inp"} type="password" {...register("password")}
                                   placeholder={"비밀번호를 입력하세요"}/>
                            {errors.password && <span className={"imp_red"}>{errors.password.message}</span>}
                        </div>
                        <div>
                            <input className={styles.login_radio} type="checkbox" id="agree" checked={selected}
                                   onChange={handleRadioChange}/>
                            <label className={styles.radio_label} htmlFor="login">로그인</label>
                        </div>
                        {firebaseError && <div className={"imp_red"}>Error: {firebaseError}</div>}
                        <div className={styles.login_div_btn}>
                            <input className={styles.login_btn} type="submit" value={"로그인"}/>
                        </div>
                        {firebaseError && <div className={"imp_red"}>Error: {firebaseError}</div>}
                    </form>
                    <div className={styles.login_bottom_link}>
                        <div className={styles.login_bottom_detail}>
                            <Link href={"/views/join_step1"}>회원가입</Link>
                        </div>
                        <div className={styles.login_bottom_detail}>
                            <Link href={"views/findpassword"}>비밀번호 찾기</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} handleClose={closeModal}>
                <div className={"modal_phone_number"}>
                    <label style={{
                        fontSize: '21px',
                        fontWeight: '500',
                        lineHeight: '23px',
                        color: '#A2BB81',
                        marginBottom: '20px'
                    }}>
                        소중한 개인정보 보호를 위해 본인인증을 진행해주세요
                    </label>
                    <div style={{
                        width: '100%',
                        height: '2px',
                        borderBottom: '1px solid #BFBFBF',
                    }}
                    ></div>
                    <label style={{
                        fontSize: '45px',
                        fontWeight: '500',
                        lineHeight: '23px',
                        letterSpacing: '-0.4px',
                        color: '#A2BB81',
                        marginTop: '53px',
                        marginBottom: '38px'
                    }}>
                        휴대폰 본인인증
                    </label>
                    <label style={{
                        fontSize: '18px',
                        fontWeight: '400',
                        lineHeight: '27px',
                        letterSpacing: '1%',
                        color: '#22222',
                    }}>
                        회원가입시 등록한 휴대전화 번호로 인증번호를 받을 수 있습니다.
                    </label>
                    <label style={{
                        fontSize: '18px',
                        fontWeight: '400',
                        lineHeight: '27px',
                        letterSpacing: '1%',
                        color: '#22222',
                        marginBottom: '37px'
                    }}>
                        개인정보보호를 위해 연락처를 일부만 표시됩니다.
                    </label>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: '32px'
                    }}>
                        <label style={{
                            fontSize: '40px',
                            fontWeight: '600',
                            lineHeight: '40px',
                            letterSpacing: '5%',
                            color: '#222',
                            marginRight: '33px'
                        }}>
                            {`0${phoneNumber}`}
                        </label>
                        <button id={"recaptcha-container"} style={{
                            width: '160px',
                            height: '48px',
                            borderRadius: '5px',
                            backgroundColor: '#232527',
                            color: '#fff',
                            fontSize: '18px',
                            fontWeight: '600',
                            lineHeight: '22.5px',
                            letterSpacing: '2%',
                        }} onClick={handleRequestNumber}>
                            인증번호받기
                        </button>
                    </div>
                    <input
                        style={{
                            width: '490px',
                            height: '46px',
                            borderRadius: '5px',
                            border: '1px solid #BFBFBF',
                            padding: '20px 10px 20px 10px',
                            gap: '10px',
                        }}
                        readOnly={isReadOnly}
                        type="text" placeholder="인증번호를 입력하세요." id={"otp"} value={otp}
                        onChange={handleOtpChange}/>
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'right'
                    }}>
                        <label style={{
                            fontSize: '16px',
                            fontWeight: '400',
                            lineHeight: '24px',
                            letterSpacing: '1%',
                            paddingRight: '10px',
                            marginBottom: '2px',
                            color: '#389BE8',
                        }}>
                            {timeRemaining > 0 ? `유효시간 : ${timeRemaining}` : '시간초과'}
                        </label>
                    </div>
                    <div style={{
                        textAlign: 'left',
                    }}>
                        <label style={{
                            fontSize: '18px',
                            fontWeight: '400',
                            lineHeight: '27px',
                            letterSpacing: '1%',
                            color: '#BFBFBF',
                        }}>
                            인증번호를 발송했습니다
                        </label>
                        <label style={{
                            fontSize: '18px',
                            fontWeight: '400',
                            lineHeight: '27px',
                            letterSpacing: '1%',
                            color: '#BFBFBF',
                            marginBottom: '43px'
                        }}>
                            인증번호가 오지 않을경우 입력하신 정보를 확인하여주세요
                        </label>
                    </div>
                    <button id={"sign-in-button"} style={{
                        width: '320px',
                        height: '52px',
                        background: '#A2BB81',
                        borderRadius: '26px',
                        fontSize: '14px',
                        color: '#fff',
                        marginBottom: '10px'
                    }} onClick={onVerifyOTP}>
                        확인
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default Login;
