import axios from 'axios';
import * as process from "process";

export interface SendSmsOptions {
    to: string; // 수신자 번호
    from: string; // 발신자 번호
    text: string; // 메시지 본문
}

export const sendSms = async (options: SendSmsOptions) => {
    const { to, from, text } = options;

    // 네이버 클라우드 플랫폼 SMS API 요청 URL 및 헤더 설정
    const url = `https://sens.apigw.ntruss.com/sms/v2/services/${process.env.NEXT_PUBLIC_SMS_ID}/messages`; // 여기서 {serviceId} 부분을 실제 서비스 ID로 대체하세요.
    const headers = {
        'Content-Type': 'application/json',
        'x-ncp-apigw-timestamp': Date.now().toString(),
        'x-ncp-iam-access-key': process.env.NEXT_PUBLIC_SMS_ACCESS_KEY, // 여기서 'your_auth_key' 부분을 실제 인증 키로 대체하세요.
        'X-NCP-service-secret': process.env.NEXT_PUBLIC_SMS_SECRET, // 여기서 'your_service_secret' 부분을 실제 서비스 시크릿으로 대체하세요.
    };

    // 요청 본문 설정
    const body = {
        type: 'SMS',
        from,
        to: [to],
        content: text,
    };

    try {
        const response = await axios.post(url, body, { headers });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};
