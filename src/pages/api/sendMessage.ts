import {NextApiRequest, NextApiResponse} from "next";

export default async (req : NextApiRequest, res: NextApiResponse) => {
    try{
        console.log(`param data....${req.body.phoneNum}`);
        console.log(`param data....${req.body.message}`);
        const firebaseFunction ='http://127.0.0.1:5001/weddingmanagement-52f64/us-central1/sendFireFunctionSms';
        const response = await fetch(firebaseFunction, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              phoneNum: req.body.phoneNum,
                message: req.body.message
            },)
        });
        const result = await response.text();
        res.status(200).json({statusCode: 200, message: result});
    }catch (e) {
        console.log(`Error occurred while sending message: ${e}`);
        console.log(e);
        res.status(500).json({statusCode: 500, error: 'Failed to send message'});
    }
}