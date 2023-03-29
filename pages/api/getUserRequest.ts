import { userRequest } from "../../pages/userRequest";


export default async function handler(req:any, res:any) {
    try{
       const resp = await userRequest.get('/v2/GetCounts/296d3a8e-7244-4590-856c-cc902b67f9b3')
        res.status(200).json(resp.data.sold)
     } catch (error) {
        console.error(error)
  
      }
    }