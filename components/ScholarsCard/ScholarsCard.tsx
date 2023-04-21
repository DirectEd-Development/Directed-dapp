import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button/Button'
import ProgressBar from '../ProgressBar/ProgressBar'

type ScholarsCardProps = {
	schoolName: string
	schoolAlias: string
	funded: string
	fundsLeft: string
	donated: string
	infoLink: string
	image: string
}

const ScholarsCard = ({
	funded,
	fundsLeft,
	schoolName,
	schoolAlias,
	donated,
	infoLink,
	image,
}: ScholarsCardProps) => {
	return (
		<div className='scholars-card'>
			<Image
				src={image}
				alt='djed-scholars'
				width='350'
				height='200'
				className='scholars-card__image'
			/>
			<div className='scholars-card__content'>
				<div className='scholars-card__title'>
					<h3>{schoolName}</h3>
					<span>
						Access Stipends for {schoolAlias} students from low income families
					</span>
					<Link href={infoLink}>
						<Button variant='link'>Learn More</Button>
					</Link>
				</div>
				<div className='scholars-card__stats'>
					<div>
						<h5>
							{funded}/{fundsLeft}
						</h5>
						<span>Scholarships</span>
						<span>funded</span>
					</div>
					<div>
						<h5>23</h5>
						<span>remaining Hero </span>
						<span>and Royals</span>
					</div>
					<div className='scholars-card__donors'>
						<Image
							src='/static/images/clock.png'
							alt='Pool Image'
							width='20'
							height='20'
						/>
						<span>
							<span>Fundraising ends</span>
							<span>on April 30</span>
						</span>
					</div>
					<div className='scholars-card__donors'>
						<Image
							src='/static/images/Vector.png'
							alt='Pool Image'
							width='20'
							height='20'
						/>
						<span>
							<span>{donated} person(s) have</span>
							<span>donated</span>
						</span>
					</div>
				</div>

				<ProgressBar />
				<Link href='/donate'>
					<Button variant='primary'>Donate Now</Button>
				</Link>
			</div>
		</div>
	)
}

export default ScholarsCard
