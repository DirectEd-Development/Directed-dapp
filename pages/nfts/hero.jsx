import { useState, useEffect } from 'react'
import { useWallet, useAssets } from '@meshsdk/react'
import { AssetCard, Meta, Button } from '../../components'
import { Layout } from '../../components'
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router'

export default function Home() {
	const [nfts, setNfts] = useState([]);
	const [boysNfts, setBoysNfts] = useState([]);
	const [girlsNfts, setGirlsNfts] = useState([]);
	const [boysError, setBoysError] = useState(null);
	const [girlsError, setGirlsError] = useState(null);
	const [hasPolicyIdAssetsChecked, setHasPolicyIdAssetsChecked] = useState(false);
	const [error, setError] = useState(null);
	const { connected, wallet } = useWallet();
	const assets = useAssets();
	const router = useRouter();
	const params = router.asPath.split('?')[1];
	console.log(params)

	useEffect(() => {
		const getNfts = async () => {
			try {
				const [boysRes, girlsRes] = await Promise.all([
					axios.post("http://app.directed.dev/api/transactions"),
					axios.post("http://app.directed.dev/api/transactions")
				]);
	
				setBoysNfts(boysRes.data[0]);
				setGirlsNfts(girlsRes.data[1]);
			} catch (err) {
				console.error(err);
		
				// Check which request caused the error
				if (err.config.url.includes("boys")) {
				  setBoysError('An error occurred while fetching boys NFT details.');
				} else if (err.config.url.includes("girls")) {
				  setGirlsError('An error occurred while fetching girls NFT details.');
				} else {
				  // Handle other errors or set a generic error message
				  setError('An error occurred while fetching NFT details.');
				}
			  }
		};
	
		getNfts();
	}, []);
	
	console.log(boysNfts)

	return (

		<>
			<Layout>
				<Meta title="NFT's Portal" description="Directed Ed NFT's portal page" />
				<main className='nft-portal'>
					<>
						<div className='nft-portal__filter'>

							<div className="nft-portal__assets">
								<div className="nft-portal__assets_header">
									<h3>Pick which Hero you’d like</h3>

									<Button disabled variant='primary'>Edit Metadata</Button>

								</div>
								{params == "boyspool" ? (
									boysNfts.map((nft) => {
										return (
											<a
												target='_blank'
												key={nft.id}
												href={nft.paymentGatewayLinkForSpecificSale}
												rel='noreferrer'
											>
												<img
													src={`https://ipfs.io/ipfs/${nft.ipfsLink.split('/')[2]}`}
													alt={nft.title}
													width={200}
													height={200}
												/>
											</a>
										)
									})
								) : (
									girlsNfts.map((nft) => {
										return (
											<a
												target='_blank'
												key={nft.id}
												href={nft.paymentGatewayLinkForSpecificSale}
												rel='noreferrer'
											>
												<img
													src={`https://ipfs.io/ipfs/${nft.ipfsLink.split('/')[2]}`}
													alt={nft.title}
													width={200}
													height={200}
												/>
											</a>
										)
									})
								)}
							</div>

						</div>
					</>
				</main>
			</Layout>
		</>


	);
}
