import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'

const PoolsCard = ({ title, image }: { title?: string; image?: string }) => {
	return (
		<div className='bg-light2 pools-card'>
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
							<h1 className='font-bold text-[18px] md:text-start text-center'>
								{title}
							</h1>
							<Link
								href='https://www.notion.so/directed/Kagumo-High-School-bf13e9c623be4480a5a5c0aac3ebed18'
								passHref
							>
								<p className='md:text-start text-[12px] pb-2 underline hover:no-underline text-gray-600 text-center'>
									Learn more about this school
								</p>
							</Link>
						</div>
						<ul className='text-[12px] text-gray-600 pools-card__list-items'>
							<li className='pools-card__list'>
								<Image
									className='inline'
									src='/static/images/clock.png'
									alt='Pool Image'
									width='20'
									height='20'
								/>
								7 days left
							</li>
							<li className='pools-card__list'>
								<Image
									className='inline'
									src='/static/images/Vector.png'
									alt='Pool Image'
									width='20'
									height='20'
								/>
								5 person(s) have donated
							</li>
							<li className='pools-card__list'>
								<Image
									className='inline'
									src='/static/images/dollar.png'
									alt='Pool Image'
									width='20'
									height='20'
								/>
								Each scholarship costs ₳1000
							</li>
							<li className='pools-card__list'>
								<Image
									className='inline'
									src='/static/images/nft.png'
									alt='Pool Image'
									width='20'
									height='20'
								/>
								Remaining Heroes: 20
							</li>
						</ul>
					</div>

					<div className='text-gray-600 pools-card__funds'>
						<div>
							<h1 className='font-semibold text-xl text-center'>3/40</h1>
							<p className='text-center text-sm'>Scholarships funded</p>
						</div>
						<div className='md:border-2 md:border-transparent md:border-t-white md:w-14 md:h-2 border-2 border-transparent border-l-white w-2 h-14'></div>
						<div className='py-2'>
							<h1 className='font-semibold text-xl text-center'>1</h1>
							<p className='text-center text-sm'>
								Remaining Scholarship <br /> Naming Right
							</p>
						</div>
					</div>

					<div className='pools-card__progress'>
						<ProgressBar />
						<div className='flex items-center justify-center p-5'>
							<Link href='/donate'>
								<button className='btn btn-primary'>donate now</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PoolsCard
