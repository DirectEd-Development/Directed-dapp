import { useState, useEffect } from 'react'
import { useWallet, useAssets } from '@meshsdk/react'
import { AssetCard, Meta } from '../../components'
import { data } from '../../data/assets'

const POLICY_IDS = ['ee78bdfeeb58deb674a11c5a9ea2514087933ff0a01f3bf6f1517fc0', '2df82849a30577cbe3734f103d6d91f721c3508a45ca37955b768270'];

export default function Home() {
	const [hasPolicyIdAssetsChecked, setHasPolicyIdAssetsChecked] =
		useState<boolean>(false)

	const [filterInput, setFilterInput] = useState<string>('') // state to hold the user's filter input
	const { connected, wallet } = useWallet()
	const assets: any = useAssets()

	const checkPolicyIdAssets = async () => {
		if (connected && wallet) {
		  let hasPolicyIdAssets = false; // No assets found with the given policy ID
		  for (const policyId of POLICY_IDS) {
			const assets = await wallet.getPolicyIdAssets(policyId);
			if (assets.length > 0) {
			  hasPolicyIdAssets = true; // Assets found with the given policy ID
			  break;
			}
		  }
		  setHasPolicyIdAssetsChecked(hasPolicyIdAssets);
		}
	}	  

	const filteredAssets = data.filter((asset) => {
		return asset.name.toLowerCase().includes(filterInput.toLowerCase()) // filter the assets based on the user's input
	})

	useEffect(() => {
		checkPolicyIdAssets()
	}, [connected, assets])

	const handleFilterInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFilterInput(event.target.value) // update the state with the user's input
	}

	return (
		<>
			<Meta
				title="Donor's Portal"
				description='Direced Ed donors portal page'
			/>
			<main className='donors-portal'>
				<div className='donors-portal__filter'></div>
				{hasPolicyIdAssetsChecked ? (
					<>
						<div className='donors-portal__assets'>
							<div className='donors-portal__assets_header'>
								<h1>Gallery</h1>
								<input
									type='text'
									placeholder='Filter assets'
									value={filterInput}
									onChange={handleFilterInput}
								/>
							</div>
							<AssetCard assets={filteredAssets} />
						</div>
					</>
				) : (
					<>
						<h3>You need to hold a DirectEd Lions NFT to access this page</h3>
						<h4>
							You get a DirectEd Lions NFT when you donate to a pool 
							<a href='https://app.directed.dev/scholarship-pool'> here. </a>
						</h4>
					</>
				)}
			</main>
		</>
	)
}
