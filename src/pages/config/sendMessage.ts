import * as process from "process";
import makeSignature from "./make-signature";
import axios from "axios";
import logDev from "@/pages/config/log";

export interface SendSmsOptions {
    to: string; // 수신자 번호
    from: string; // 발신자 번호
    text: string; // 메시지 본문
}

export const sendSms = async (options: SendSmsOptions) => {
    const {to, from, text} = options;
    // 네이버 클라우드 플랫폼 SMS API 요청 URL 및 헤더 설정
    const url = `https://sens.apigw.ntruss.com/sms/v2/services/${process.env.NEXT_PUBLIC_SMS_ID}/messages`; // 여기서 {serviceId} 부분을 실제 서비스 ID로 대체하세요.
    // const now = new Date();
    // const timestamp = new Date(now.getTime() - (now.getTimezoneOffset() * 60000)).toISOString().slice(0, -1);
    const timestamp = Date.now();
    const signature = makeSignature({
        method: 'POST',
        timestamp,
        serviceId: process.env.NEXT_PUBLIC_SMS_ID + '',
        accessKey: process.env.NEXT_PUBLIC_SMS_ACCESS_KEY + '',
        secretKey: process.env.NEXT_PUBLIC_SMS_SECRET + ''
    });
    logDev(`signature : ${signature}`);
    // const headers = new Headers({
    //     'Content-Type': 'application/json; charset=utf-8',
    //     'x-ncp-apigw-timestamp': timestamp,
    //     'x-ncp-iam-access-key': process.env.NEXT_PUBLIC_SMS_ACCESS_KEY + '', // 여기서 'your_auth_key' 부분을 실제 인증 키로 대체하세요.
    //     'x-ncp-apigw-signature-v2': signature,
    // });
    const headers = {
        'Content-Type': 'application/json; charset=utf-8',
        'x-ncp-apigw-timestamp': timestamp,
        'x-ncp-iam-access-key': process.env.NEXT_PUBLIC_SMS_ACCESS_KEY + '', // 여기서 'your_auth_key' 부분을 실제 인증 키로 대체하세요.
        'x-ncp-apigw-signature-v2': signature,
    }
    logDev(`text : ${text}`);
    // 요청 본문 설정
    const body = {
        type: 'SMS',
        contentType: 'COMM',
        countryCode: '82',
        from,
        content: text,
        messages: [{
            to,
            content: text
        }]
    };

    const response = await axios.post(url, body, {headers})
        .catch((error) => {
            console.log('-----------------------------------');
            console.log(error.response.data);
            console.log(error.response.data.status);
            console.log(error.response.data.errorMessage);
            console.log(error.response.data.errors);
            console.log('-----------------------------------');
        });
    // const response = await fetch(url, {
    //     method: 'POST',
    //     headers: headers,
    //     body: JSON.stringify(body),
    // });
    logDev('--------------Response---------------------');
    logDev(response);
    logDev('-----------------------------------');
};
