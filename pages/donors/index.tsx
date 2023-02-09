import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {
	useWallet,
	useWalletList,
	useAssets,
	useLovelace,
} from '@meshsdk/react'
import { BrowserWallet } from '@meshsdk/core'
import { AssetCard, ConnectWallet } from '../../components'
import { GetStaticProps } from 'next'
import { Assets } from '../../types/assets'

const server = 'http://localhost:3000'

export default function Home({ assetsData }: { assetsData: Assets[] }) {
	console.log(assetsData)

	const { wallet, connected, name, connecting, connect, disconnect, error } =
		useWallet()
	const assets = useAssets()

	const [hasPolicyIdAssets, setHasPolicyIdAssets] = useState<boolean>(false)
	const [hasPolicyIdAssetsChecked, setHasPolicyIdAssetsChecked] =
		useState<boolean>(false)

	// const connectWallet = async () => {
	// 	try {
	// 		const wallet = await connect('eternl')
	// 		return wallet
	// 	} catch (error) {}
	// }

	// useEffect(() => {
	// 	connectWallet()
	// }, [])

	useEffect(() => {
		console.log(assets)

		if (connected) {
			const checkPolicyIdAssets = async () => {
				const assets = await wallet.getPolicyIdAssets(
					'c117f33edeee4b531dfdb85ead5753433c9dbd875629bc971013ffac'
				)

				setHasPolicyIdAssetsChecked(true)

				if (!assets.length) {
					return disconnect()
				}
				setHasPolicyIdAssets(true)
			}

			if (connected) {
				checkPolicyIdAssets
			}
		}
	}, [assets])

	return (
		<>
			<Head>
				<title>Donors' Portal</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='container py-8'>
				<div className='flex items-center justify-between gap-2 flex-wrap'>
					<AssetCard assets={assetsData} />
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
