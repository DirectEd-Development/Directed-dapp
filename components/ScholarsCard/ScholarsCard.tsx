import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button/Button'
import ProgressBar from '../ProgressBar/ProgressBar'

type ScholarsCardProps = {
	schoolName: string
	schoolAlias: string
	funded: string
	fundsLeft: string
	donated: number
	amount: string
	infoLink: string
	image: string
	donateLink: string
	stakeAdd: string
	nftsleft?: string
}

const ScholarsCard = ({
	funded,
	fundsLeft,
	schoolName,
	schoolAlias,
	donated,
	amount,
	infoLink,
	image,
	donateLink,
	stakeAdd,
	nftsleft,
}: ScholarsCardProps) => {
	return (
		<div className='scholars-card'>
			<div
			className='scholars-card__image-container'
			>
			
			<img src={image} alt={'djed-scholars'} className='image'/>

			</div>
		
			<div className='scholars-card__content'>
				<div className='scholars-card__title'>
					<h3>{schoolName}</h3>
					<span>
						Access Scholarship Pools for {schoolAlias} students from low income
						families
					</span>
					<div className='scholars-card__info'>
					<h6>Number of students</h6>
					{funded}/{fundsLeft}
					<h6>GOAL AMOUNT: <span>{amount}</span></h6>
				</div>
				<Link href={infoLink}>
						<Button variant='link'>Learn More</Button>
					</Link>
				</div>
				<div className='scholars-card__stats'>
				</div>
				<Link href={donateLink}>
					<Button variant='primary'>Donate Now</Button>
				</Link>
			</div>
		</div>
	)
}

export default ScholarsCard
