import React from 'react'
import type { NextPage } from 'next'
import { Button, Modal, PoolCard, FilterMenu, Meta } from '../components'
import { useRouter } from 'next/router'

import { hasCookie, setCookie } from 'cookies-next'
import Image from 'next/image'
import { schoolData } from '../styles/lib/schooldata'
import { SchoolDataType } from '../types/schoolDataType'

const Home: NextPage = () => {
	const [modal, setModal] = React.useState<
		'donate-done' | 'how-to-donate' | 'video' | ''
	>('')

	const router = useRouter()

	const handleDonationModal = () => {
		setModal('')
		router.push('/progress')
	}
	React.useEffect(() => {
		if (router.query && router.query.from === 'donation') {
			setModal('donate-done')
		}
	}, [router.query])

	React.useEffect(() => {
		if (!hasCookie('direct-ed-user')) {
			setModal('how-to-donate')
			setCookie('direct-ed-user', 'not a stranger', { maxAge: 60 * 60 * 24 })
		}
	}, [])

	return (
		<>
			<Meta title='Scholarship Pools' description='Scholarship Pools Page' />
			<main className='scholarship-pool container'>
				<h1 className='scholarship-pool__title'>Scholarship Pools</h1>

				<div className='scholarship-pool__info'>
					<div className='flex-between scholarship-pool__info-badges'>
						<div>
							<h4 className='scholarship-pool__info-title'>
								What Can I Receive as a Donor?
							</h4>
							<div className='scholarship-pool__badges'>
								<div>
									<div className='scholarship-pool__info-badge'>
										<Image
											className=''
											src='/static/images/acess.png'
											alt='image'
											width='90'
											height='90'
										/>
										<label tabIndex={1}>
											<Image
												src='/static/images/Hover.png'
												alt='image'
												width='50'
												height='50'
											/>
										</label>
									</div>
									<p className=''>Access Token</p>
								</div>
								<div>
									<div className='scholarship-pool__info-badge'>
										<Image
											src='/static/images/digital.png'
											alt='image'
											width='90'
											height='90'
										/>
										<label tabIndex={1}>
											<Image
												src='/static/images/Hover.png'
												alt='image'
												width='50'
												height='50'
											/>
										</label>
									</div>
									<p>Digital Art</p>
								</div>
								<div>
									<div className='scholarship-pool__info-badge'>
										<Image
											src='/static/images/donor.png'
											alt='image'
											width='90'
											height='90'
										/>
										<label tabIndex={1}>
											<Image
												src='/static/images/Hover.png'
												alt='image'
												width='50'
												height='50'
											/>
										</label>
									</div>
									<p>Donors' Dinner</p>
								</div>
							</div>
						</div>
						<div className='scholarship-pool__naming-badge'>
							<h5>Naming Rights</h5>
							<div className='flex-gap'>
								<Image
									src='/static/images/rights.png'
									alt='image'
									width='90'
									height='90'
								/>
								<div>
									<p>
										The donor naming rights for a given scholarship cohort can
										be purchased for $3,000
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<FilterMenu />

				{schoolData.map((school: SchoolDataType) => (
					<PoolCard key={school.title} {...school} />
				))}
			</main>
		</>
	)
}

export default Home
