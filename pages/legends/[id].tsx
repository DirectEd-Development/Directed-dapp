import { GetStaticPaths } from 'next'
import React from 'react'
import { Assets } from '../../types/assets'

type Props = {}

const server = 'http://localhost:3000'

const Legend = ({ asset }: any) => {
	console.log(asset)
	return <div>{asset?.name}</div>
}

export default Legend

export const getStaticPaths = async () => {
	const res = await fetch(`${server}/api/assets`)
	const assets: Assets[] = await res.json()

	const ids = assets.map((asset) => asset.id)

	const paths = ids.map((id) => ({
		params: { id: id.toString() },
	}))

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async (context: any) => {
	const res = await fetch(`${server}/api/assets/${context.params.id}`)
	const asset = await res.json()

	return {
		props: {
			asset,
		},
	}
}
