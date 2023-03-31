import Link from 'next/link'
import AssetImage from '../AssetImage/AssetImage'
import { Assets } from '../../types/assets'

const AssetCard = ({ assets }: { assets: Assets[] }) => {
	return (
		<>
			{assets.map((asset) => (
				<div key={asset.id} className='assets'>
					<div>
						<AssetImage imageSrc={asset.image} imageAlt={asset.name} />
					</div>
					{/* title, options and quantity */}
					<div className='flex flex-col px-4 space-y-1'>
						<div className='flex flex-col -space-y-0.5'>
							<h5 className='text-center font-bold'>{asset.name}</h5>
							<Link
								href={`/legends/${asset.id}`}
								className='text-[#374756] text-base text-center cursor-pointer'
							>
								Learn More
							</Link>
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default AssetCard
