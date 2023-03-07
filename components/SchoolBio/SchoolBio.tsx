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
				<h3>{name}</h3>
				<p>
					{studentsAmount} students are currently enrolled from this school.
				</p>
			</div>
		</div>
	)
}

export default SchoolBio
