import { useState, useRef, useEffect } from 'react'
import type { NextPage } from 'next'
import {
	Button,
	Modal,
	PoolCard,
	FilterMenu,
	Meta,
	DonorInfoTab,
	ScholarsCard,
} from '../components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { schoolData } from '../lib/schooldata'
import { SchoolDataType } from '../types/schoolDataType'
import { ModalHandler } from '../components/Modal/Modal'

const Home: NextPage = () => {
	// const [modal, setModal] = useState<'donate-done' | 'how-to-donate' | ''>('')

	// const donateModalRef = useRef<ModalHandler>(null)
	// const defaultModalRef = useRef<ModalHandler>(null)

	// const router = useRouter()

	// const handleDonationModal = () => {
	// 	setModal('')
	// 	router.push('/progress')
	// }

	// useEffect(() => {
	// 	if (router.query && router.query.from === 'donation') {
	// 		setModal('donate-done')
	// 	}
	// }, [router.query])

	// if (modal === 'donate-done') {
	// 	donateModalRef.current?.openModal()
	// }

	// if (modal === 'how-to-donate') {
	// 	defaultModalRef.current?.openModal()
	// }

	return (
		<>
			<Meta title='Scholarship Pools' description='Scholarship Pools Page' />
			<main className='scholarship-pool container'>
				<section className='scholarship-pool__text-content'>
					<h2 className='scholarship-pool__title'>What am I Supporting?</h2>

					<p>
						Donate directly to a scholarship pool below to enable high-potential
						students from low-income background to participate in our free
						coding bootcamps
					</p>
					<p>
						You may choose to make general contribution to DirectEd that is not
						earmarked
					</p>

					<div className='scholarship-pool__button-wrapper'>
						<Button variant='primary'>Donate Now</Button>
					</div>
				</section>
				<section className='scholarship-pool__text-content'>
					<h2 className='scholarship-pool__title'>
						How will the scholarship pool money be used?
					</h2>

					<Image
						src='/static/images/piechart.png'
						alt='piechart'
						width='1000'
						height='450'
					/>
				</section>
				<section className='scholarship-pool__text-content'>
					<h2 className='scholarship-pool__title'>
						How big a difference will this have?
					</h2>

					<h4>
						For every $1 donated, more than $30 of economic value created*
					</h4>
					<h4>
						This places us amongst the <strong>most effective charities</strong>{' '}
						in the world in regard to poverty alleviation and economic
						development
					</h4>

					<h4>
						"The World Bank, United Nations and all development banks should
						drop the nonsense they are doing and support DirectEd." - Professor
						John Smith, University of Oxford
					</h4>

					<div className='scholarship-pool__button-wrapper'>
						<Button variant='primary'>Donate Now</Button>
					</div>
				</section>

				<section>
					<h2>Exclusive perks of being a supporter of DirectEd's mission!</h2>
					<DonorInfoTab />
				</section>

				<section className='scholarship-pool__potrait-card'>
					<h2>Scholarship Pools</h2>
					<div className='flex-between'>
						<ScholarsCard />
						<ScholarsCard />
						<ScholarsCard />
					</div>
				</section>

				<FilterMenu />

				<section className='scholarship-pool__landscape-card'>
					{schoolData.map((school: SchoolDataType) => (
						<PoolCard key={school.title} {...school} />
					))}
				</section>
			</main>
			{/* Donate Modal */}
			{/* 
			<Modal ref={donateModalRef}>
				<div className='donate-modal'>
					<h3>Thank you for your donation to DirectEd</h3>
					<p>
						We are glad you have chose to join us on this journey to positively
						impact the lives of others in under developed countries
					</p>
					<Button onClick={handleDonationModal} variant='accent' noShadow>
						View Scholar’s Progress
					</Button>
				</div>
			</Modal> */}

			{/* How To Modal */}
			{/* <Modal ref={defaultModalRef}>
				<h3>How To Donate</h3>
				<p>
					To donate, navigate to the scholarship pool of your choice and press
					donate. There’s no need to connect your wallet for now! After this
					step, you’ll see two options: Warrior tier (40 ADA) and Hero tier
					(1000 ADA).
				</p>
				<p>
					After selecting an option and pressing continue, you’ll be directed to
					the dedicated NMKR pay gateway for you to complete your donation!
				</p>
				<p>I don’t know about crypto. Can I still donate?</p>
				<p>
					If you are not a crypto user and want to donate using credit card,
					here's a video guide that'll walk you through the process
				</p>

				<div>
					<Image
						onClick={() => setModal('video')}
						src='/static/images/video.png'
						width='300'
						height='200'
						alt='image'
					/>
				</div>
				<Button onClick={handleDonationModal} noShadow variant='link'>
					<Link
						href={
							'https://www.notion.so/directed/About-DirectEd-Lions-Collection-0e6003940695493b81c3c1f16841d208'
						}
						passHref
						onClick={() => setModal('video')}
					>
						Learn more
					</Link>
				</Button>
			</Modal> */}
		</>
	)
}

export default Home
