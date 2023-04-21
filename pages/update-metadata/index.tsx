import { useState } from "react";
import { useRouter } from "next/router";
import { projectUid, nftUid } from "../../components/Config/Config"
import { nftUpdate } from "../../lib/api/nftUpdate";
import axios from "axios";

export default function NftUpdate() {
    const [metadata, setMetadata] = useState("");
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const updateMetadata = {
          "721": {
            "9d49b77043115933feda12d7a3fdcf5641d917127ab297cfa82cca81": {
              "MetaBrave": {
                name: metadata
              }
            }
          }
        }
        try {
          const res = await axios.put(`http://localhost:3000/api/transactions`, updateMetadata)
          // const response = await nftUpdate.post(
          //   `/v2/UpdateMetadata/${projectUid}/${nftUid}`,
          //   { metadata }
          // );
          // console.log(response.data);
          // router.push("https://pay.preprod.nmkr.io/?p=5edcc5ea394c4dea9ee0f91429534281&n=917403ccd8ca488583274cd670d8d162");
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
