import type { NextPage } from 'next'
import {
	PoolCard,
	FilterMenu,
	Meta,
	DonorInfoTab,
	ScholarsCard,
} from '../../components'

import { schoolData } from '../../lib/schooldata'
import { SchoolDataType } from '../../types/schoolDataType'

const ScholarshipPool: NextPage = () => {
	return (
		<>
			<Meta title='Scholarship Pools' description='Scholarship Pools Page' />
			<main className='scholarship-pool container'>
				<section className='scholarship-pool__title'>
					<h3>How We Show Appreciation To Our Supporters</h3>
					<DonorInfoTab />
				</section>
				<section className='scholarship-pool__potrait-card'>
					<h2>Stipend Pools</h2>
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
