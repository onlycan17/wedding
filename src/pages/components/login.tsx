import { useForm, SubmitHandler, RegisterOptions } from 'react-hook-form';
import {signInWithPhoneNumber} from "firebase/auth";
import {signInWithEmailAndPassword} from "firebase/auth";
import { collection, query, where, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import {auth, db, recaptchaVerifier} from "../config/firbase_setting";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import React from "react";

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

const Login: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({
        resolver: yupResolver(schema),
    });
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
                console.log("고유번호나 성명이 일치하지 않습니다.");
                // const docRef = await addDoc(collection(db, "usersInfo"), {
                //     uniquenumber: uniquenumber,
                //     username: username,
                //     password: password
                // });
                // console.log("Document written with ID: ", docRef.id);
                setFirebaseError("고유번호나 성명이 일치하지 않습니다.");
                return;
            }else{
                console.log("success!!!!!!");
                const result = await signInWithEmailAndPassword(auth, email, password);
                console.log(result);
                const confirmationResult = await signInWithPhoneNumber(auth, '01027354302', recaptchaVerifier);
                console.log(confirmationResult);
            }

        };

    return (
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
            <input type="submit" />
        </form>
    );
};

export default Login;
