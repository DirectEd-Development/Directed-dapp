import { useState, useEffect } from 'react'
import { useWallet, useAssets } from '@meshsdk/react'
import { AssetCard, Meta } from '../../components'
import { Layout } from '../../components'
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router'

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
				const res = await axios.post("https://app.directed.dev/api/transactions")
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
			<Layout>
				<Meta title="NFT's Portal" description="Directed Ed NFT's portal page" />
				<main className='nft-portal'>
					<div className='nft-portal__filter'>
						<>
							<div className="nft-portal__assets">
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
						</>
					</div>
				</main>
			</Layout>
		</>

	);
}
