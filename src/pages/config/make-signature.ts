import * as CryptoJS from "crypto-js";

function makeSignature(p: { method: string; serviceId: string, timestamp: number, accessKey:string, secretKey:string }): string {
    console.log(p);
    const space: string = " ";   // one space
    const newLine: string = "\n";   // new line
    const method: string = p.method;   // method
    const url: string = `/sms/v2/services/${p.serviceId}/messages`;  // url (include query string)
    const timestamp: number = p.timestamp;     // current timestamp (epoch)
    const accessKey: string = p.accessKey;     // access key id (from portal or Sub Account)
    const secretKey: string = p.secretKey;     // secret key (from portal or Sub Account)

    const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
    hmac.update(method);
    hmac.update(space);
    hmac.update(url);
    hmac.update(newLine);
    hmac.update(timestamp.toString());
    hmac.update(newLine);
    hmac.update(accessKey);

    const hash = hmac.finalize();

    return hash.toString(CryptoJS.enc.Base64);
}

export default makeSignature;