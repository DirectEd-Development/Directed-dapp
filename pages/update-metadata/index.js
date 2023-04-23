import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { projectUid, nftUid } from "../../components/Config/Config"
import { nftUpdate } from "../../lib/api/nftUpdate";
import axios from "axios";

export default function NftUpdate() {
    const [updatedata, setUpdatedata] = useState({});
    const [nft, setNft] = useState({});
    const router = useRouter();
    const uid = router.asPath.split("?")[1];

    useEffect(() => {
      const getNftDetails = async() => {
        try {
          const res = await axios.get(`http://localhost:3000/api/transactions/${uid}`);
          console.log(res.data);
          setNft(res.data)
        }catch(err) {
          console.log(err);
        }
      }
      getNftDetails();
    },[]);

    const metadata = {
      "721": {
        "2df82849a30577cbe3734f103d6d91f721c3508a45ca37955b768270" : {
          "CiaraYobezi": {
            name: nft.name,
            image: `ipfs://${nft.ipfshash}`,
            "minted for": updatedata
          }
        }
      }
    }
    const updateMetadata = {policyid: nft.policyid, uid: nft.uid, metadata}
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const res = await axios.put(`http://localhost:3000/api/transactions`, updateMetadata)
         
        } catch (error) {
          console.error(error);
        }
      };
      
    const handleChange = (event) => {
        // setNft((prev) => {
        //     return {...nft, [event.target.name]: event.target.value}
        // });
        setUpdatedata(event.target.value)
    };

    return (
        <div className='updateform'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="metadata">Minted For:</label>
                <input
                    type="text"
                    id="metadata"
                    name="minted for"
                    // value={metadata}
                    onChange={handleChange}
                />
                <button type="submit">Update metadata</button>
            </form>
        </div>
    );
}
