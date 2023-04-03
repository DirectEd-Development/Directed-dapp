import dbConnect from "../../../utils/mongo";
import Transaction from "../../../utils/Transaction";

export default async function handler (req, res) {
    const {method} = req;

    await dbConnect();

    if(method === "GET") {
       
    }

    if(method === "POST") {
       try {
        const transaction = await Transaction.create(req.body);
        res.status(200).json(transaction);
       }catch(err) {
        res.status(500).json(err);
       }
    }
}