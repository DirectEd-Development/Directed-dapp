import { nftUpdate } from "../../lib/api/nftUpdate";
const heroes = ['ab9ebe10-673b-43cb-a568-b2f54438dc48', '528af4d0-868a-4442-b5e2-caedd3979813'];
const royals = ['1c73676d-d6d0-4e8b-b5e0-8d1eedd404ad', 'ed7a0468-9432-4291-8de5-cfba4fe8766d']

export async function updateNftMetadata(req, res) {
    try{
        const metadataValue = req;
        // assume metadata is sent in the request body
        const resp = await nftUpdate.post('https://studio-api.nmkr.io/v2/UpdateMetadata/ebb68cb0-95f7-4dbe-836b-d38ccf76a8c4/38c6da89-6eca-45ae-9f79-c385f99d7e2f', metadataValue);
        res.status(200).json(resp.data)
    } catch (error) {
        console.error(error)
    }
}
export async function getNftDetailsById(uid) {
    try{
        // get nft details by id
        const res = await nftUpdate.get(`https://studio-api.nmkr.io/v2/GetNftDetailsById/${uid}`);
        return res.data.metadata;
    } catch (error) {
        console.error(error)
    }
}

export async function getAllNfts(params) {
    let nfts = [];
    if(params.params == "royals"){
        await Promise.all(
            royals.map(async(item) => {
               try{
                const res = await nftUpdate.get(`https://studio-api.nmkr.io/v2/GetNfts/${item}/all/10/1`);
                return  nfts.push(res.data);
               }catch(err) {
                console.log(err);
               }
            })
        )

    } else if (params.params == 'hero') {
        await Promise.all(
            heroes.map(async(item) => {
               try{
                const res = await nftUpdate.get(`https://studio-api.nmkr.io/v2/GetNfts/${item}/all/10/1`);
                return  nfts.push(res.data);
               }catch(err) {
                console.log(err);
               }
            })
        )
    }
    return nfts;
}