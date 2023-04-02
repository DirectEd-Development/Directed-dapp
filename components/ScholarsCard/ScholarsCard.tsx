import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button/Button'
import ProgressBar from '../ProgressBar/ProgressBar'

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
					<h3>Kagumo Highschool</h3>
					<Button variant='link'>Learn More</Button>
				</div>
				<div className='flex-between scholars-card__stats'>
					<div>
						<h4>23</h4>
						<p>Scholarships</p>
						<p>funded</p>
					</div>
					<div>
						<h4>X</h4>
						<p>remaining Hero and Royal tier NFTs</p>
					</div>
				</div>
				<div className='flex-between scholars-card__stats'>
					<div className='scholars-card__donors'>
						<Image
							src='/static/images/clock.png'
							alt='Pool Image'
							width='20'
							height='20'
						/>
						<span>X days left</span>
					</div>
					<div className='scholars-card__donors'>
						<Image
							src='/static/images/Vector.png'
							alt='Pool Image'
							width='20'
							height='20'
						/>
						<span>
							<span>X person(s) have</span>
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
