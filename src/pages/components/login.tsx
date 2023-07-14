import { useForm, SubmitHandler, RegisterOptions } from 'react-hook-form';
import {PhoneAuthProvider, RecaptchaVerifier, signInWithCredential, signInWithPhoneNumber} from "firebase/auth";
import {signInWithEmailAndPassword} from "firebase/auth";
import { collection, query, where, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import {auth, db} from "../config/firbase_setting";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import React, {useEffect, useState} from "react";
import logDev from "@/pages/config/log";



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
    const [loginStep, setLoginStep] = useState<number>(1);
    const [verificationId, setVerificationId] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({
        resolver: yupResolver(schema),
    });
    let recaptchaVerifier: RecaptchaVerifier;
    useEffect(() => {
        recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container');
    }, []);
    const [firebaseError, setFirebaseError] = React.useState<string | null>(null);
        const onSubmit: SubmitHandler<FormFields> = async ({ uniquenumber, username,email, password }) => {
            const queryDate = query(
                collection(db, "userInfo"),
                where("uniqueNumber", "==", uniquenumber ),
                where("userName", "==", username ),
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
            }else{
                logDev('UniqueNumber and UserName is correct !!!!!');
                let phoneNumber = 0;
                try{
                const result = await signInWithEmailAndPassword(auth, email, password);
                const idToken = await result.user.getIdToken();
                    if(idToken){
                        logDev(idToken);
                        querySnapshot.forEach((doc) => {
                            logDev(`${doc.id} => ${doc.data()} `);
                             phoneNumber = doc.data().phoneNumber;
                        });
                    }
                }catch (e) {
                    console.log(e);
                    setFirebaseError('Email 또는 비밀번호가 일치하지 않습니다.');
                    return;
                }
                try{
                    const confirmData = await signInWithPhoneNumber(auth, `+82${String(phoneNumber)}`, recaptchaVerifier);
                    setVerificationId(confirmData.verificationId);
                    setLoginStep(2);
                    logDev('success phone number !!!!!');
                    logDev(confirmData);
                    // console.log(confirmData);

                }catch (e) {
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
            await signInWithCredential(auth,credential);
            //const result = await signInWithCredential(auth,credential);
            // logDev(result);
            // logDev('success OTP !!!!!');
            // const accessToken = await result.user.getIdToken();
            // logDev(accessToken);
        } catch (error) {
            // Handle errors here.
            console.log(error);
            setFirebaseError('인증번호가 일치하지 않습니다.');
        }
    };

    return (
        <div>
            {loginStep === 1 ?
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>고유번호(아이디)</label>
                        <input type="text" {...register("uniquenumber")} placeholder={""} />
                        {errors.uniquenumber && <span>{errors.uniquenumber.message}</span>}
                    </div>
                    <div>
                        <label>이름(본명)</label>
                        <input type="text" {...register("username")} />
                        {errors.username && <span>{errors.username.message}</span>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        {errors.username && <span>{errors.username.message}</span>}
                    </div>
                    <div>
                        <label>비밀번호</label>
                        <input type="password" {...register("password")} />
                        {errors.password && <span>{errors.password.message}</span>}
                    </div>
                    {firebaseError && <div>Error: {firebaseError}</div>}
                    <div id={"recaptcha-container"}></div>
                    <input type="submit" />
                </form>
                :
                <div>
                    <input type="text" placeholder="인증번호를 입력하세요." id={"otp"} value={otp} onChange={handleOtpChange} />
                    <button onClick={onVerifyOTP}>인증번호 확인</button>
                    {firebaseError && <div>Error: {firebaseError}</div>}
                </div>
            }
        </div>
    );
};

export default Login;
