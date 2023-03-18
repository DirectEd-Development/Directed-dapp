import Image from 'next/image'

import { MdLocationOn, MdOutlineMail } from 'react-icons/md'
import { RiErrorWarningLine } from 'react-icons/ri'

type SchoolCardProps = {
	image: string
	schoolname?: string
	chart: string
	location?: string
}

const SchoolCard = ({
	image,
	schoolname,
	location,
	chart,
}: SchoolCardProps) => {
	return (
		<>
			<div className='school-card'>
				<h4>{schoolname}</h4>
				<div>
					<Image
						src={image}
						alt=''
						width='350'
						height='250'
						className='school-card__image'
					/>
					<div>
						<div className='flex-gap'>
							<MdLocationOn size={20} />
							<p>{location}</p>
						</div>
						<div className='flex-gap'>
							<MdOutlineMail size={20} />
							<p>Thank You Letter</p>
						</div>
					</div>
					<div className='school-card__content'>
						<img src={chart} alt='chart' />
						<div className='school-card__topics'>
							<div className='school-card__topic flex-gap'>
								<span></span>
								<p>Git Interaction</p>
							</div>
							<div className='school-card__topic flex-gap'>
								<span></span>
								<p>Loops and Data</p>
							</div>
							<div className='school-card__topic flex-gap'>
								<span></span>
								<p>APIs</p>
							</div>
							<div className='school-card__topic flex-gap'>
								<span></span>
								<p>ReactJS</p>
							</div>
							<div className='school-card__topic flex-gap'>
								<span></span>
								<p>NodeJS</p>
							</div>
						</div>
					</div>
					<div className='school-card__content'>
						<div className='school-card__tabs'>
							<span className='school-card__tab active'>Emurgo Scholar</span>
							<span className='school-card__tab'>Simon Scholar</span>
							<span className='school-card__tab'>DirectEd Scholar</span>
						</div>
						<p className='school-card__text'>
							Slide to left or right to change the scholars
						</p>
					</div>
					<div className='flex-gap'>
						<RiErrorWarningLine size={20} />
						<p>Learn more about the scholars</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default SchoolCard
