import dbConnect from "../../../utils/mongo";
import Transaction from "../../../utils/Transaction";
import { updateNftMetadata, getAllNfts } from "../updateMetadata";

export default async function handler(req, res) {
  const { method } = req;

  // Uncomment the following line if you have a database to connect to
  // await dbConnect();

  if (method === "POST") {
    try {
      const result = await getAllNfts();
      res.status(200).json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  if (method === "GET") {
    // Uncomment the following lines if you want to handle GET requests
    // try {
    //   const transaction = await Transaction.create(req.body);
    //   res.status(200).json(transaction);
    // } catch (err) {
    //   console.error(err);
    //   res.status(500).json({ error: "Internal Server Error" });
    // }
  }

  if (method === "PUT") {
    try {
      const result = await updateNftMetadata(req.body);
      res.status(200).json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
