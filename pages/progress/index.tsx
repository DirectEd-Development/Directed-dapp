import { NextPage } from 'next'
import { Button, SchoolCard } from '../../components'
import { RiErrorWarningLine } from 'react-icons/ri'
import { useWallet, useAssets } from '@meshsdk/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Progress: NextPage = () => {
	const [hasPolicyIdAssetsChecked, setHasPolicyIdAssetsChecked] =
		useState<boolean>(false)

	const { connected, wallet } = useWallet()

	const assets: any = useAssets()
	const policyId = assets?.map((asset: any) => asset.policyId)

	const checkPolicyIdAssets = async (policyId: any) => {
		const assets = await wallet.getPolicyIdAssets(`${policyId}`)

		if (assets.length <= 0) {
			console.log('zero values')
		} else {
			setHasPolicyIdAssetsChecked(true)
		}
	}

	if (connected) {
		checkPolicyIdAssets(policyId)
	}

	useEffect(() => {
		if (connected === false) {
			setHasPolicyIdAssetsChecked(false)
		}
		console.log(connected)
	}, [connected])

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
					<h3>You need to make a donation to access this page</h3>
				)}
			</main>
		</>
	)
}

export default Progress
