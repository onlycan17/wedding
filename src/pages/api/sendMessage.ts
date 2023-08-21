import {NextApiRequest, NextApiResponse} from "next";
import {sendSms} from "@/pages/config/sendMessage";

export default async (req : NextApiRequest, res: NextApiResponse) => {
    try{
        console.log(`param data....${req.body.phoneNum}`);
        console.log(`param data....${req.body.message}`);
        const options = {
            from: "01051613620",
            to: req.body.phoneNum,
            text: req.body.message,
        };
        const result = await sendSms(options);
        // logDev(`result....${result}`);
        // res.status(200).json({statusCode: 200, message: 'success'});
        res.send(result);
    }catch (e) {
        console.log(`Error occurred while sending message: ${e}`);
        console.log(e);
        res.status(500).json({statusCode: 500, error: 'Failed to send message'});
    }
}