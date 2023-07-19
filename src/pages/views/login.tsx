import {useForm, SubmitHandler} from 'react-hook-form';
import {PhoneAuthProvider, RecaptchaVerifier, signInWithCredential, signInWithPhoneNumber} from "firebase/auth";
import {signInWithEmailAndPassword} from "firebase/auth";
import {collection, query, where, getDocs} from 'firebase/firestore';
import {auth, db} from "@/pages/config/firbase-setting";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import React, {useEffect, useState} from "react";
import logDev from "@/pages/config/log";
import {useRecoilState} from "recoil";
import {loginUser} from "@/pages/common/state";
import {useRouter} from "next/router";
import styles from '../../styles/css/login.module.css';
import Cookies from "js-cookie";

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
        .required('패스워드는 필수 입력 입니다.'),
});

const schemaOtp = yup.object().shape({
    otp: yup.string().required('인증번호는 필수 입력 입니다.'),
} as any);


const Login: React.FC = () => {
    const [getUser, setUser] = useRecoilState(loginUser);
    const [loginStep, setLoginStep] = useState<number>(1);
    const [verificationId, setVerificationId] = useState('');
    const [userName, setUserName] = useState(Cookies.get('userName') ?? '');
    const [uniqueNumber, setUniqueNumber] = useState(Cookies.get('uniqueNumber') ?? '');
    const [getEmail, setEmail] = useState<string | null>(Cookies.get('email') ?? null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const router = useRouter();
    const [selected, setSelected] = useState(false);

    const {register, handleSubmit, formState: {errors}} = useForm<FormFields>({
        resolver: yupResolver(schema),
    });
    let recaptchaVerifier: RecaptchaVerifier;
    useEffect(() => {
        recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container');

    }, []);
    const [firebaseError, setFirebaseError] = React.useState<string | null>(null);
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
            let phoneNumber = 0;
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
                        phoneNumber = doc.data().phoneNumber;
                        setPhoneNumber(phoneNumber.toString());
                        setUserName(doc.data().userName);
                        setUniqueNumber(doc.data().uniqueNumber);
                        setEmail(result.user.email);
                    });
                }
            } catch (e) {
                console.log(e);
                setFirebaseError('Email 또는 비밀번호가 일치하지 않습니다.');
                return;
            }
            try {
                const confirmData = await signInWithPhoneNumber(auth, `+82${String(phoneNumber)}`, recaptchaVerifier);
                setVerificationId(confirmData.verificationId);
                setLoginStep(2);
                logDev('success phone number !!!!!');
                logDev(confirmData);
                // console.log(confirmData);

            } catch (e) {
                console.log(e);
                setFirebaseError('인증번호 전송에 실패하였습니다.');
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
            const credential = PhoneAuthProvider.credential(verificationId, otp);
            const result = await signInWithCredential(auth, credential);
            logDev(result);
            logDev('success OTP !!!!!');
            const accessToken = await result.user.getIdToken();

            logDev('result user email : ' + getEmail);
            if (getUser) {
                getUser.email = getEmail;
                getUser.phoneNumber = phoneNumber;
                getUser.uid = result.user.uid;
                getUser.token = accessToken;
                getUser.userName = userName;
                getUser.uniqueNumber = uniqueNumber;
                setUser(getUser);
            }

            logDev(accessToken);

            await router.push('/main');
        } catch (error) {
            // Handle errors here.
            console.log(error);
            setFirebaseError('인증번호가 일치하지 않습니다.');
        }
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(event.target.checked);
        if(event.target.checked){
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

    return (
        <div className={"sub_wrap"}>
            <h2 className={"sub_tit"}>로그인</h2>
            <div className={`${styles.login_body} pt50`}>
                <div className={styles.login_cont}>
                    <div role={"group"} className={"fieldset_area2 phone_area"}>
                        {loginStep === 1 ?
                            <form className={styles.login_tb} onSubmit={handleSubmit(onSubmit)}>
                                <div className={"inp-wrap"}>
                                    <label className={styles.input_label}>고유번호(아이디)</label>
                                    <input className={"inp"} type="text" {...register("uniquenumber")}
                                           placeholder={"고유번호를 입력해주세요"} />
                                    {errors.uniquenumber && <span className={"imp_red"}>{errors.uniquenumber.message}</span>}
                                </div>
                                <div className={"inp-wrap"}>
                                    <label className={styles.input_label}>이름(본명)</label>
                                    <input className={"inp"} type="text" {...register("username")} placeholder={"이름(본명)을 입력하세요"} />
                                    {errors.username && <span className={"imp_red"}>{errors.username.message}</span>}
                                </div>
                                <div className={"inp-wrap"}>
                                    <label className={styles.input_label}>Email</label>
                                    <input className={"inp"} type="email" {...register("email")} placeholder={"이메일을 입력하세요"} />
                                    {errors.username && <span className={"imp_red"}>{errors.username.message}</span>}
                                </div>
                                <div className={"inp-wrap"}>
                                    <label className={styles.input_label}>비밀번호</label>
                                    <input className={"inp"} type="password" {...register("password")} placeholder={"비밀번호를 입력하세요"} />
                                    {errors.password && <span className={"imp_red"}>{errors.password.message}</span>}
                                </div>
                                <div>
                                    <input className={styles.login_radio} type="checkbox" id="agree" checked={selected} onChange={handleRadioChange}  />
                                    <label className={styles.radio_label} htmlFor="login">로그인</label>
                                </div>
                                {firebaseError && <div className={"imp_red"}>Error: {firebaseError}</div>}
                                <div id={"recaptcha-container"}></div>
                                <div className={styles.login_div_btn}>
                                    <input className={styles.login_btn} type="submit" value={"로그인"}/>
                                </div>
                            </form>
                            :
                            <div>
                                <input type="text" placeholder="인증번호를 입력하세요." id={"otp"} value={otp}
                                       onChange={handleOtpChange}/>
                                <button onClick={onVerifyOTP}>인증번호 확인</button>
                                {firebaseError && <div className={"imp_red"}>Error: {firebaseError}</div>}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
