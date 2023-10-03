import { nftUpdate } from "../../lib/api/nftUpdate";

const royals = ['ed7a0468-9432-4291-8de5-cfba4fe8766d', '1c73676d-d6d0-4e8b-b5e0-8d1eedd404ad'];
const heroes = ['ab9ebe10-673b-43cb-a568-b2f54438dc48', '528af4d0-868a-4442-b5e2-caedd3979813'];


export async function updateNftMetadata(data) {
    
    try{
        // assume metadata is sent in the request body
        const res = await nftUpdate.post(`https://studio-api.nmkr.io/v2/UpdateMetadata/${data.policyid}/${data.uid}`, data.metadata);
        return res
    } catch (error) {
        console.error(error)
    }
}
export async function getNftDetailsById(uid) {
    try{
        // get nft details by id
        const res = await nftUpdate.get(`https://studio-api.nmkr.io/v2/GetNftDetailsById/${uid}`);
        return res.data;
    } catch (error) {
        console.error(error)
    }
}

export async function getAllNfts() {
    let nfts = [];
    await Promise.all([
        ...heroes.map(async (item) => {
            try {
                const res = await nftUpdate.get(`https://studio-api.nmkr.io/v2/GetNfts/${item}/free/5/1`);
                console.log(`Hero response: ${JSON.stringify(res.data)}`);
                nfts.push(res.data);
            } catch (err) {
                console.log(`Error fetching hero NFTs: ${err}`);
            }
        }),
        ...royals.map(async (item) => {
            try {
                const res = await nftUpdate.get(`https://studio-api.nmkr.io/v2/GetNfts/${item}/free/5/1`);
                console.log(`Royals response: ${JSON.stringify(res.data)}`);
                nfts.push(res.data);
            } catch (err) {
                console.log(`Error fetching royal NFTs: ${err}`);
            }
        }),
        
    ]);

    return nfts;
}

// export async function getAllNfts(params) {
//     let nfts = [];
//     if(params.params == "royals"){
//         await Promise.all(
//             royals.map(async(item) => {
//                try{
//                 const res = await nftUpdate.get(`https://studio-api.nmkr.io/v2/GetNfts/${item}/all/10/1`);
//                 return  nfts.push(res.data);
//                }catch(err) {
//                 console.log(err);
//                }
//             })
//         )

//     } else if (params.params == 'hero') {
//         await Promise.all(
//             heroes.map(async(item) => {
//                try{
//                 const res = await nftUpdate.get(`https://studio-api.nmkr.io/v2/GetNfts/${item}/all/10/1`);
//                 return  nfts.push(res.data);
//                }catch(err) {
//                 console.log(err);
//                }
//             })
//         )
//     }
//     return nfts;
// }