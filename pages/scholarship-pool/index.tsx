import type { NextPage } from 'next'
import {
	// PoolCard,
	// FilterMenu,
	Meta,
	DonorInfoTab,
	ScholarsCard,
} from '../../components'
// import { schoolData } from '../../lib/schooldata'
// import { SchoolDataType } from '../../types/schoolDataType'

const ScholarshipPool: NextPage = () => {
	return (
		<>
			<Meta title='Scholarship Pools' description='Scholarship Pools Page' />
			<main className='scholarship-pool container'>
				<section className='scholarship-pool__title'>
					<h3>How We Show Appreciation To Our Supporters</h3>
					<DonorInfoTab />
				</section>
				<section className='scholarship-pool__potrait-section'>
					<h3>Access Stipend Pools</h3>
					<div className='scholarship-pool__potrait-cards'>
						<ScholarsCard
							donated='3'
							funded='3'
							fundsLeft='10'
							schoolName='Djed Scholars'
							schoolAlias='Kagumo High'
							infoLink='https://directed.notion.site/Kagumo-High-School-bf13e9c623be4480a5a5c0aac3ebed18'
							image='/static/images/djed-scholars.jpg'
						/>
						<ScholarsCard
							donated='0'
							funded='0'
							fundsLeft='10'
							schoolName="Mang'u High"
							schoolAlias="Mang'u High"
							infoLink='https://directed.notion.site/Mang-u-High-30fe2b6847864743b579dfd38f0d4f46'
							image='/static/images/mangu.jpg'
						/>
						<ScholarsCard
							donated='0'
							funded='0'
							fundsLeft='10'
							schoolName="MaryHill Girl's"
							schoolAlias="MaryHill Girl's High"
							infoLink=''
							image='/static/images/mary-hill.jpg'
						/>
						<ScholarsCard
							donated='0'
							funded='0'
							fundsLeft='5'
							schoolName="Ngong Road Children's Foundation"
							schoolAlias="Ngong Road Children's Foundation"
							infoLink=''
							image='/static/images/ngong.jpg'
						/>
					</div>
				</section>
				{/* <FilterMenu />
				<section className='scholarship-pool__landscape-card'>
					{schoolData.map((school: SchoolDataType) => (
						<PoolCard key={school.title} {...school} />
					))}
				</section> */}
			</main>
		</>
	)
}

export default ScholarshipPool
