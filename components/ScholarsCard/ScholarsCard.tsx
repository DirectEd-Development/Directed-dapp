import Image from 'next/image'
import Button from '../Button/Button'
import ProgressBar from '../ProgressBar/ProgressBar'
import Link from 'next/link'

type ScholarsCardProps = {}

const ScholarsCard = ({}: ScholarsCardProps) => {
	return (
		<div className='scholars-card'>
			<Image
				src='/static/images/kagumo.png'
				alt='kagumo school'
				width='350'
				height='200'
				className='scholars-card__image'
			/>
			<div className='scholars-card__content'>
				<div className='scholars-card__title'>
					<h3>Djed Scholars</h3>
					<p>
						Access Stipends for Djed Scholar students from low income families.
					</p>
					<Link href='https://directed.notion.site/Kagumo-High-School-bf13e9c623be4480a5a5c0aac3ebed18'>
						<Button variant='link'>Learn More</Button>
					</Link>
				</div>
				<div className='scholars-card__stats'>
					<div>
						<h5>3</h5>
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
						<span>Fundraising ends </span>
						<span>on April 30</span>
					</div>
					<div className='scholars-card__donors'>
						<Image
							src='/static/images/Vector.png'
							alt='Pool Image'
							width='20'
							height='20'
						/>
						<span>
							<span>3 person(s) have</span>
							<span>donated</span>
						</span>
					</div>
				</div>

				<ProgressBar />
				<Button variant='primary'>Donate Now</Button>
			</div>
		</div>
	)
}

export default ScholarsCard
