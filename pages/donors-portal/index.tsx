import { useState } from 'react'
import { useWallet, useAssets } from '@meshsdk/react'
import { AssetCard, Meta } from '../../components'
import { GetStaticProps } from 'next'
import { Assets } from '../../types/assets'

const server = 'http://localhost:3000'

type Asset = {
	unit: string
	policyId: string
	assetName: string
	fingerprint: string
	quantity: string
}

export default function Home({ assetsData }: { assetsData: Assets[] }) {
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

	return (
		<>
			<Meta
				title="Donor's Portal"
				description='Direced Ed donors portal page'
			/>
			<main className='donors-portal'>
				<div className='donors-portal__asset'>
					{hasPolicyIdAssetsChecked ? (
						<>
							<AssetCard assets={assetsData} />
						</>
					) : (
						<h3 className='donors-portal__no-donation'>
							You need to make a donation to access this page
						</h3>
					)}
				</div>
			</main>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(`${server}/api/getAssets`)
	const assetsData = await res.json()

	return {
		props: {
			assetsData,
		},
	}
}
