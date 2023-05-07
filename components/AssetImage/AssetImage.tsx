import Image from 'next/image';

const AssetImage = ({
	imageSrc,
	imageAlt,
}: {
	imageSrc?: string
	imageAlt?: string
}) => {
	return (
		<div className='asset-image'>
			<Image
				src={imageSrc || '/images/placeholder.png'}
				alt={imageAlt || 'Asset Image'}
				width={150}
				height={150}
				unoptimized={true}
			/>
		</div>
	)
}

export default AssetImage
