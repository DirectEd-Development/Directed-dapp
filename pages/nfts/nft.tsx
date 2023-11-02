import { useState, useEffect } from 'react';
import { useWallet, useAssets } from '@meshsdk/react';
import { Meta } from '../../components';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {getAllNfts} from "../api/updateMetadata"

const heroes: string[] = ['c24e5983-90e0-4721-9937-c246e91913e6', '2c4da26b-40ea-44b9-bb87-6e6d36bd73f3'];

interface NFTDetails {
  id: string;
  uid: string;
  ipfsLink: string;
  title: string;
}

export default function nft() {
  const [nfts, setNfts] = useState<NFTDetails[]>([]);
  const [hasPolicyIdAssetsChecked, setHasPolicyIdAssetsChecked] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { connected, wallet } = useWallet();
  const assets = useAssets();
  const router = useRouter();

  useEffect(() => {
    const getNfts = async () => {
      console.log("All nfts")
      try {
        const res = await axios.post("http://app.directed.dev/api/transactions")
        // const res = await getAllNfts()
        console.log(res)
        // setNfts({res.id, res.uid, res.ipfsLink, res.title})
        // setNfts({res.id, res.uid, res.ipfsLink, res.displayName});
      } catch (err) {
        console.error(err);
        setError('An error occurred while fetching NFT details.');
      }
    };

    getNfts();
  }, []);

  return (
    <>
      <Meta title='Heroes NFTS' description='DirectEd Heroes NFTs' />
      <main className='nft-assets'>
        <div className='nft-assets'></div>
        <>
          <h3>Pick which nft you'd like</h3>
          {error ? (
            <div style={{ color: 'red' }}>{error}</div>
          ) : (
            <div className='nft-assets__singlenfts'>
              {nfts.length > 0 &&
                nfts.map((item) => (
                  <Link
                    target='_blank'
                    key={item.id}
                    href={{
                      pathname: `/`,
                      query: item.uid,
                    }}
                  >
                    <img
                      src={`https://ipfs.io/ipfs/${item.ipfsLink.split('/')[2]}`}
                      alt={item.title}
                      width={200}
                      height={200}
                    />
                  </Link>
                ))}
            </div>
          )}
        </>
      </main>
    </>
  );
}
