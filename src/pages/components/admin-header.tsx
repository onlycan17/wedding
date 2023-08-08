import React, {useEffect, useState} from "react";
import {Logout} from "@/pages/common/logout";
import {useRouter} from "next/router";
import {auth, db} from "@/pages/config/firbase-setting";
import {collection, query} from "firebase/firestore";

const AdminHeader: React.FC = () => {
    const router = useRouter();
    const [user, setUser] = useState('');
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user.email!);
            } else {
                setUser('');
            }
        });
    }, [user]);
    const handleLogout = async () => {
        console.log('logout');
        Logout();
        await router.push('/manager/login');
    }
    return (
        <div className={'h-28 w-full bg-white shadow-sm shadow-gray-400 z-10 flex flex-row justify-between'}>
            <div style={{backgroundColor:'#695B4C', border : '1px solid #FFDAB6', width:'214px'}} className={'flex justify-center items-center'}>
                <div className="admin-logo"></div>
            </div>
            <div className={'h-full flex justify-end items-end mr-3 pb-3'}>
                <label className={'mr15'}>{user}</label>
                <button type={'button'} className={'shadow-orange-500 border-solid border-b-2 h20px'}
                        onClick={handleLogout}>로그아웃
                </button>
            </div>
        </div>
    )
}

export default AdminHeader;