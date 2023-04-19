import { nftUpdate } from "../../pages/nftUpdate";

export default async function handler(req:any, res:any) {
    try{
        const metadataValue = req.body.metadata; // assume metadata is sent in the request body
        const resp = await nftUpdate.post('https://studio-api.preprod.nmkr.io/v2/UpdateMetadata/5edcc5ea-394c-4dea-9ee0-f91429534281/e569a247-5158-43f7-ba37-ada6cbe7d2aa', { metadata: metadataValue });
        res.status(200).json(resp.data)
    } catch (error) {
        console.error(error)
    }
}
