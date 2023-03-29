import type { NextPage } from 'next'
import {
	Button,
	Modal,
	PoolCard,
	FilterMenu,
	Meta,
	DonorInfoTab,
	ScholarsCard,
} from '../../components'
import Image from 'next/image'
import { schoolData } from '../../lib/schooldata'
import { SchoolDataType } from '../../types/schoolDataType'

const ScholarshipPool: NextPage = () => {
	return (
		<>
			<Meta title='Scholarship Pools' description='Scholarship Pools Page' />
			<main className='scholarship-pool container'>
				{/* <section className='scholarship-pool__text-content'>
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

					<Button variant='primary'>Donate Now</Button>
				</section> */}

				<section className='scholarship-pool__title'>
					<h3>How We Show Appreciation To Our Supporters</h3>
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
		</>
	)
}

export default ScholarshipPool
