import { NextPage } from 'next'
import Link from 'next/link'
import AssetImage from '../AssetImage/AssetImage'
import { Assets } from '../../types/assets'

const AssetCard = ({ assets }: { assets: Assets[] }) => {
	return (
		<>
			{assets.map((asset) => (
				<div key={asset.id}>
					{/* image */}
					<div className='flex justify-center pt-0'>
						<AssetImage imageSrc={asset.image} imageAlt={asset.name} />
					</div>
					{/* title, options and quantity */}
					<div className='flex flex-col px-4 space-y-1'>
						<div className='flex flex-col -space-y-0.5'>
							<h5 className='text-center font-bold'>{asset.name}</h5>
							<p className='text-center text-[#374756] text-sm'>
								{asset.caption}...
							</p>
							<Link
								href={`/legends/${asset.id}`}
								className='text-[#374756] text-base text-center cursor-pointer'
							>
								View Story
							</Link>
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default AssetCard
