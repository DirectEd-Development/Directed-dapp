import { NextPage } from 'next'
import { Button, SchoolCard } from '../../components'
import { RiErrorWarningLine } from 'react-icons/ri'
import { useWallet, useAssets } from '@meshsdk/react'
import { useEffect, useState } from 'react'

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
							<SchoolCard
								schoolname='Kagumo High School'
								chart='/static/images/chart-1.png'
								location='Naivasha, Kenya'
								image='/static/images/peters.png'
							/>
							<SchoolCard
								schoolname='St. Peters High School'
								chart='/static/images/chart-1.png'
								location='Naivasha, Kenya'
								image='/static/images/saintpete.png'
							/>
							<SchoolCard
								schoolname='Strathmore High School'
								chart='/static/images/chart-1.png'
								location='Naivasha, Kenya'
								image='/static/images/strats.png'
							/>
						</div>
					</>
				) : (
					<h3>You need to make a donation to access this page</h3>
				)}
			</main>
		</>
	)
}

export default Progress
