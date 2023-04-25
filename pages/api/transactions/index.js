import dbConnect from "../../../utils/mongo";
import Transaction from "../../../utils/Transaction";
import {updateNftMetadata, getAllNfts} from "../updateMetadata";

export default async function handler (req, res) {
    const {method} = req;

    await dbConnect();
    // 'https://studio-api.preprod.nmkr.io/v2/UpdateMetadata/5edcc5ea-394c-4dea-9ee0-f91429534281/e569a247-5158-43f7-ba37-ada6cbe7d2aa'

    if(method === "POST") {
       try {
        const result = await getAllNfts(req.body);
        res.status(200).json(result);
       }catch(err) {
        console.log(err);
       }
    }

    if(method === "GET") {
    //    try {
    //     const transaction = await Transaction.create(req.body);
    //     res.status(200).json(transaction);
    //    }catch(err) {
    //     res.status(500).json(err);
    //    }
    }
    if(method === "PUT") {
        try{
           const result = await updateNftMetadata(req.body);
           res.status(200).json(result);
        }catch(err) {
            console.log(err);
        }
    }
}