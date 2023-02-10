import Image from 'next/image'

const AssetImage = ({
	imageSrc,
	imageAlt,
}: {
	imageSrc?: string
	imageAlt?: string
}) => {
	return (
		<Image
			className='rounded-full my-4 mx-auto object-center object-cover w-32 h-32'
			src={imageSrc || '/images/placeholder.png'}
			alt={imageAlt || 'Asset Image'}
			width={150}
			height={150}
		/>
	)
}

export default AssetImage
