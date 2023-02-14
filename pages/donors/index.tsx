import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useWallet, useLovelace, useAssets } from '@meshsdk/react'
import { AssetCard, DropDown } from '../../components'
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
			<Head>
				<title>Donors' Portal</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='container py-8'>
				<div className='flex items-center justify-between gap-2 flex-wrap'>
					<DropDown />
					{hasPolicyIdAssetsChecked ? (
						<>
							{' '}
							<AssetCard assets={assetsData} />{' '}
						</>
					) : (
						<h1>You need to make a donation to access this page</h1>
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
