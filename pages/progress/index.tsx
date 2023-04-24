import { NextPage } from 'next'
import { Button, SchoolCard } from '../../components'
import { RiErrorWarningLine } from 'react-icons/ri'
import { useWallet, useAssets } from '@meshsdk/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const POLICY_ID = "921fce888dc477101ff8ec3a6c2eb8d5e6947b9cfff640079314246c";

const Progress: NextPage = () => {
	const [hasPolicyIdAssetsChecked, setHasPolicyIdAssetsChecked] =
		useState<boolean>(false)

	const { connected, wallet } = useWallet()

	const assets: any = useAssets()
	const policyId = assets?.map((asset: any) => asset.policyId)

	const checkPolicyIdAssets = async () => {
		if (connected && wallet) {
		  const assets = await wallet.getPolicyIdAssets(POLICY_ID);
	
		  if (assets.length <= 0) {
			setHasPolicyIdAssetsChecked(false); // No assets found with the given policy ID
		  } else {
			setHasPolicyIdAssetsChecked(true); // Assets found with the given policy ID
		  }
		}
	};


	useEffect(() => {
		checkPolicyIdAssets();
	}, [connected, assets]);

	return (
		<>
			<main className='progress'>
				{hasPolicyIdAssetsChecked ? (
					<>
						<div className='progress__header'>
							<h2>Progress Track for Simon Sallstrom Scholars</h2>
							<div className='flex-gap'>
								<RiErrorWarningLine size={20} />
								<Button variant='link'>Read More</Button>
							</div>
						</div>
						<div className='progress__content'>
							{/* <Link href='/scholar-progress'> */}
							<SchoolCard
								schoolname='Kagumo High School'
								chart='/static/images/chart-1.png'
								location='Naivasha, Kenya'
								image='/static/images/peters.png'
							/>
							{/* </Link> */}
						</div>
					</>
				) : (
					<>
						<h3>You need to make a donation to access this page</h3>
						<h4> Donate to a pool
							<a href="https://app.directed.dev/scholarship-pool">[here]</a>
							to recieve te token that unlocks this page.
						</h4>
					</>
				)}
			</main>
		</>
	)
}

export default Progress
