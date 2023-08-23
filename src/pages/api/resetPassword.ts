import type { NextApiRequest, NextApiResponse } from 'next';
import resetPassword from "@/pages/common/function/reset-password";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { email } = req.body;
        const result = await resetPassword(email);
        res.status(200).json(result);
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
};
