import { nftUpdate } from "../../lib/api/nftUpdate";


export default async function handler(req:any, res:any) {
   try{
      const resp = await nftUpdate.get('/v2/GetCounts/ab9ebe10-673b-43cb-a568-b2f54438dc48')
      res.status(200).json(resp.data.free)
   } catch (error) {
      console.error(error)

   }
}