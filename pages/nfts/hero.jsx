import { useState, useEffect } from 'react'
import { useWallet, useAssets } from '@meshsdk/react'
import { AssetCard, Meta } from '../../components'
import { data } from '../../data/hero'
import Image from 'next/image'
import Button from '../../components/Button/Button'
import Link from 'next/link'
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router'

const heroes = ['ab9ebe10-673b-43cb-a568-b2f54438dc48', '528af4d0-868a-4442-b5e2-caedd3979813'];

// interface NFTDetails {
// 	id: string;
// 	uid: string;
// 	ipfsLink: string;
// 	title: string;
// }

export default function Home() {
	const [nfts, setNfts] = useState([]);
	const [boysNfts, setBoysNfts] = useState([]);
	const [girlsNfts, setGirlsNfts] = useState([]);
	const [hasPolicyIdAssetsChecked, setHasPolicyIdAssetsChecked] = useState(false);
	const [error, setError] = useState(null);
	const { connected, wallet } = useWallet();
	const assets = useAssets();
	const router = useRouter();
	const params = router.asPath.split('?')[1];
	console.log(params)

	useEffect(() => {
		const getNfts = async () => {
		  console.log("All nfts")
		  try {
			const res = await axios.post("http://localhost:3000/api/transactions")
			console.log(res)
			setBoysNfts(res.data[0]);
			setGirlsNfts(res.data[1]);
		  } catch (err) {
			console.error(err);
			setError('An error occurred while fetching NFT details.');
		  }
		};
	
		getNfts();
	  }, []);
console.log(boysNfts)

return (
		<>
			<Meta title="NFT's Portal" description="Directed Ed NFT's portal page" />
			<main className='nft-assets'>
				<div className='nft-assets__singlenfts'>
				{params == "boyspool" ? (
					boysNfts.map((nft) => {
						return (
							<Link
							target='_blank'
							key={nft.id}
							href={{
								pathname: `/update-metadata`,
								query: nft.uid,
							}}
						>
							<img
								src={`https://ipfs.io/ipfs/${nft.ipfsLink.split('/')[2]}`}
								alt={nft.title}
								width={200}
								height={200}
							/>
						</Link>
						)
					})
				):(
					girlsNfts.map((nft) => {
						return (
							<Link
							target='_blank'
							key={nft.id}
							href={{
								pathname: `/update-metadata`,
								query: nft.uid,
							}}
						>
							<img
								src={`https://ipfs.io/ipfs/${nft.ipfsLink.split('/')[2]}`}
								alt={nft.title}
								width={200}
								height={200}
								/>
						</Link>
						)
					})
					)}
				</div>
			</main>
		</>
	);
}
