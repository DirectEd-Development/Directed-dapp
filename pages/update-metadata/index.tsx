import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { projectUid, nftUid } from "../../components/Config/Config"
import { nftUpdate } from "../../lib/api/nftUpdate";
import axios from "axios";

export default function NftUpdate() {
    const [metadata, setMetadata] = useState("");
    const [nft, setNft] = useState({});
    const router = useRouter();
    const uid = router.asPath.split("?")[1];

    useEffect(() => {
      const getNftDetails = async() => {
        try {
          const res = await axios.get(`http://localhost:3000/api/transactions/${uid}`);
          setNft(res.data)
        }catch(err) {
          console.log(err);
        }
      }
      getNftDetails();
    },[]);
// console.log(nft);
    // const updateMetadata = {
    //   "721": {
    //     nft.policy_Id: {

    //     }
    //   }
    // }
    const updateMetadata = {
      ...nft,name: metadata
    }
    console.log(updateMetadata)
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // console.log(updateMetadata)
        try {
          const res = await axios.put(`http://localhost:3000/api/transactions/`, updateMetadata)
         
        } catch (error) {
          console.error(error);
        }
      };
      


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMetadata(event.target.value);
    };

    return (
        <div className='updateform'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="metadata">Minted For:</label>
                <input
                    type="text"
                    id="metadata"
                    name="metadata"
                    value={metadata}
                    onChange={handleChange}
                />
                <button type="submit">Update metadata</button>
            </form>
        </div>
    );
}
