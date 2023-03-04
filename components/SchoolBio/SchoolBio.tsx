import Image from 'next/image'

type SchoolBioType = {
	name?: string
	studentsAmount?: string | number
	image?: string | any
}

const SchoolBio = ({ name, studentsAmount, image }: SchoolBioType) => {
	return (
		<div className='flex-gap'>
			<div>
				<Image src={image} alt='school photo' width='150' height='150' />
			</div>
			<div>
				<h2 className='text-2xl text-black font-bold'>{name}</h2>
				<p className='text-sm text-gray-400'>
					{studentsAmount} students are currently enrolled from this school.
				</p>
			</div>
		</div>
	)
}

export default SchoolBio
