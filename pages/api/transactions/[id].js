import dbConnect from "../../../utils/mongo";
import Transaction from "../../../utils/Transaction";
import { getNftDetailsById } from "../updateMetadata";

export default async function handler (req, res) {
    const {
        method,
        query: { id },
        cookies
      } = req;
    await dbConnect();

    if(method === "POST") {
      
    }

    if(method === "GET") {
       try{
        const result = await getNftDetailsById(id);
        res.status(200).json(result);
       }catch(err) {
        res.status(500).json(err);
       } 
    }
    if(method === "PUT") {
      
    }
}