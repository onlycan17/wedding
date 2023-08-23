import {sendPasswordResetEmail} from "@firebase/auth";
import {auth} from "@/pages/config/firbase-setting";

const resetPassword = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth,email);
        return { success: true, message: '메일을 보냈습니다. 입력한 이메일을 확인하세요.' };
    } catch (error : any) {
        if(error.code === 'auth/user-not-found'){
            return { success: false, message: '등록된 이메일이 아닙니다.' };
        }

        return { success: false, message: error.message };
    }
};

export default resetPassword;
