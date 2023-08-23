import React, { useState } from 'react';
import styles from '../../styles/css/login.module.css';
import Link from "next/link";

const ResetPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('/api/resetPassword', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        setMessage(data.message);
    };

    return (
        <div className={'wrap'}>
            <div className={'sub_wrap'}>
                <h2 className={'sub_tit'}>비밀번호 변경</h2>
            </div>
            <div className={'login_body pt50'}>
                <div className={styles.login_cont}>
                    <div role={"group"} className={"fieldset_area2 phone_area"}>
                    <form onSubmit={handleSubmit}>
                        <div className={'inp-wrap'}>
                            <label className={styles.input_label}>이메일</label>
                            <input
                                type="email"
                                className={"inp"}
                                placeholder="이메일을 입력하세요."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {message && <div className={"imp_red"}>Error: {message}</div>}
                        <div className={styles.login_div_btn}>
                                <button type="submit" className={'button extra navy'}>비밀번호 변경</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
