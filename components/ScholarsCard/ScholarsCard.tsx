import Image from 'next/image'
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
						<h3>23</h3>
						<p>Scholarships</p>
						<p>funded</p>
					</div>
					<div>
						<h3>1</h3>

						<p>Remaining scholarship</p>
						<p>naming right</p>
					</div>
				</div>
				<ProgressBar />
				<Button variant='primary'>Donate Now</Button>
			</div>
		</div>
	)
}

export default ScholarsCard
