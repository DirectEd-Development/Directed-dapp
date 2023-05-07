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
					<div className='assets-content'>
							<h5 className='name'>{asset.name}</h5>
							<Link
								href='/notAvailable'
							>
								Learn More
							</Link>
					</div>
				</div>
			))}
		</>
	)
}

export default AssetCard
