import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Button/Button'
import ProgressBar from '../ProgressBar/ProgressBar'

const PoolsCard = ({
	title,
	image,
	desc,
}: {
	title?: string
	image?: string
	desc?: string
}) => {
	return (
		<div className='pools-card'>
			<div className='pools-card__container'>
				<Image
					className='pools-card__image'
					src={`${image}`}
					alt='school image'
					width='300'
					height='350'
				/>
				<div className='pools-card__text-content'>
					<div className='pools-card__details'>
						<div>
							<h3>{title}</h3>
							<p>
								Access Stipends for {desc} students from low income families.
							</p>
							<Link
								href='https://www.notion.so/directed/Kagumo-High-School-bf13e9c623be4480a5a5c0aac3ebed18'
								passHref
								className='pools-card__link'
							>
								Learn More
							</Link>
						</div>
					</div>
					<div className='pools-card__funds'>
						<div>
							<h3>3</h3>
							<p>Scholarships funded</p>
						</div>
						<hr />
						<div>
							<h3>23</h3>
							<p>remaining Hero and Royal tier NFTs</p>
						</div>
					</div>
					<div className='pools-card__progress'>
						<ProgressBar />
						<div className=''>
							<Link href='/donate'>
								<Button variant='primary'>donate now</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PoolsCard
