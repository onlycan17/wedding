import React, {useEffect, useState} from "react";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {SubmitHandler, useForm} from "react-hook-form";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "@/pages/config/firbase-setting";
import {useRouter} from "next/router";
import {onAuthStateChanged} from "@firebase/auth";
import {collection, getDocs, query, where} from "firebase/firestore";
import {Logout} from "@/pages/common/logout";
import Link from "next/link";

type FormFields = {
    email : string;
    password : string;
}

const schema = yup.object().shape({
    email: yup.string().email().required('이메일은 필수 입력 입니다.'),
    password: yup.string().min(8)
        .matches(/[a-z]/, '최소 하나 이상의 소문자가 필요 합니다.')
        .matches(/[A-Z]/, '최소 하나 이상의 대문자가 필요 합니다.')
        .matches(/\d+/, '최소 하나 이상의 숫자가 필요 합니다.')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, '최소 하나 이상의 특수문자가 필요 합니다.')
        .min(8, '최소 8자리이상의 비밀번호를 입력해주세요.')
        .required('비밀번호는 필수 입력 입니다.'),
});


const Login: React.FC = () => {
    const router = useRouter();
    const {register, handleSubmit, formState: {errors}} = useForm<FormFields>({
        resolver: yupResolver(schema),
    });
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(
        () => {
            onAuthStateChanged(auth,async (user)=>{
                if(user){
                    const queryDate = query(
                        collection(db, "adminAuth"),
                        where("email", "==", user.email),
                    );
                    const querySnapshot = await getDocs(queryDate);
                    if(!querySnapshot.empty){
                        await router.push('/admin/home');
                    }else{
                        Logout();
                    }
                  return;
                }
            });
        }
    ,[]);
    const handleLogin : SubmitHandler<FormFields> = async (data, event) => {
        try {
            const result = await signInWithEmailAndPassword(auth, data.email, data.password);
            const idToken = await result.user.getIdToken();
            if(idToken){
                const queryDate = query(
                    collection(db, "adminAuth"),
                    where("email", "==", data.email),
                );
                const querySnapshot = await getDocs(queryDate);
                if(querySnapshot.empty){
                    setErrorMessage('Email 또는 비밀번호가 일치하지 않거나 관리자 계정이 아닙니다.');
                    Logout();
                  return;
                }
                await router.push('/admin/home');
            }
        } catch (e) {
            console.log(e);
            setErrorMessage('Email 또는 비밀번호가 일치하지 않습니다.');
            return;
        }
    }
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }} className={'bg-amber-200'}>
            <div className={'w360px h380px bg-white z10 shadow-xl'}>
                <div className={'flex justify-center mt-5'}>
                    <h1 className={"logo"}>
                        <Link href="/">logo</Link>
                    </h1>
                </div>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className={'flex flex-col pd30'}>
                        <label className={'pr10 font-size-20 '}>이메일</label>
                        <input type={"email"} className={"w100pc h34px pd10 radius-lg border-slate-200 border-solid border-2"} {...register('email')}/>
                        {errors.email && <span className={'imp_red'}>{errors.email.message}</span>}
                        <label className={'mt20 pr10 font-size-20'}>비밀번호</label>
                        <input type={"password"} className={'w100pc h34px pd10 radius-lg border-slate-200 border-solid border-2'} {...register('password')} />
                        {errors.password && <span className={'imp_red'}>{errors.password.message}</span>}
                        {errorMessage && <span className={'imp_red'}>{errorMessage}</span>}
                        <div className={'mt10 w100pc flex justify-end'}>
                            <button type={"submit"} className={'w80px h40px bg-orange-200'}>로그인</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;