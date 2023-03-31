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
					<div>
						<div>
							<h5>{asset.name}</h5>
							<p>{asset.caption}...</p>
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
