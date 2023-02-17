import React from 'react'
import { useRouter } from 'next/router'
import { data } from '../../data/assets'
import Image from 'next/image'
import { Meta } from '../../components'

const Legend = () => {
	const router = useRouter()
	const pageId = Number(router.query.id)

	const singleAsset = data.filter((asset) => asset.id === pageId)

	return (
		<>
			{singleAsset.map((asset) => (
				<>
					<Meta title={asset.name} description={asset.caption} />
					<div
						className='w-max h-32 md:h-48 mx-auto mt-12 mb-80'
						key={asset.id}
					>
						<Image
							src={asset.image}
							alt={asset.name}
							height={200}
							width={500}
						/>
					</div>
					<div>
						<h1 className='text-5xl mt-12 text-center'>{asset.name}</h1>
						<div className='w-3/4 mx-auto my-16'>
							<p className='text-center'>{asset.description}</p>
						</div>
					</div>
				</>
			))}
		</>
	)
}

export default Legend
