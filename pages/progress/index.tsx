import { GetStaticProps, NextPage } from 'next'
import { Button, SchoolCard, DonorLayout } from '../../components'
import { RiErrorWarningLine } from 'react-icons/ri'
import { useWallet, useAssets } from '@meshsdk/react'
import { useEffect, useState } from 'react'

const POLICY_IDS = [
	'ee78bdfeeb58deb674a11c5a9ea2514087933ff0a01f3bf6f1517fc0',
	'2df82849a30577cbe3734f103d6d91f721c3508a45ca37955b768270',
]

const Progress: NextPage = ({ schools }: any) => {
	const [hasPolicyIdAssetsChecked, setHasPolicyIdAssetsChecked] =
		useState<boolean>(false)

	const { connected, wallet } = useWallet()

	const assets: any = useAssets()
	const policyId = assets?.map((asset: any) => asset.policyId)

	const checkPolicyIdAssets = async () => {
		if (connected && wallet) {
			let hasPolicyIdAssets = false // No assets found with the given policy ID
			for (const policyId of POLICY_IDS) {
				const assets = await wallet.getPolicyIdAssets(policyId)
				if (assets.length > 0) {
					hasPolicyIdAssets = true // Assets found with the given policy ID
					break
				}
			}
			setHasPolicyIdAssetsChecked(hasPolicyIdAssets)
		}
	}

	useEffect(() => {
		checkPolicyIdAssets()
	}, [connected, assets])

	return (
		<>
			<main className='progress'>
				{/* {hasPolicyIdAssetsChecked ? ( */}
				<DonorLayout>
					<div className='progress__header'>
						<h2>Progress of the DirectEd Bootcamp Scholars 2023</h2>
						<div className='flex-gap'>
							<RiErrorWarningLine size={20} />
							<Button variant='link'>Read More</Button>
						</div>
					</div>
					<div className='progress__content'>
						{schools.map((school: any) => (
							<SchoolCard
								schoolname={school.name}
								desc={`See how the ${school.name} graduates are progressing`}
								location={`${school.city}, ${school.country}`}
							/>
						))}
					</div>
				</DonorLayout>
				{/* ) : (
					<>
						<h3>You need to hold a DirectEd Lions NFT to access this page</h3>
						<h4>
							You get a DirectEd Lions NFT when you donate to a pool
							<a href='https://app.directed.dev/scholarship-pool'> here. </a>
						</h4>
					</>
				)} */}
			</main>
		</>
	)
}

export default Progress

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(
		'http://directed.us-east-1.elasticbeanstalk.com/schools/'
	)

	const schools = await res.json()
	return {
		props: {
			schools,
		},
	}
}
