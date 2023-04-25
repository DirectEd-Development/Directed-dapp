import type { NextPage } from 'next'
import {
	// PoolCard,
	// FilterMenu,
	Meta,
	DonorInfoTab,
	ScholarsCard,
} from '../../components'
import Image from 'next/image'
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
					<h5>
						Press the ‘Donate now’ button of the stipend pool you want to
						contribute to and see the DirectEd Lions minting tier options
					</h5>
					<div className='scholarship-pool__potrait-cards'>
						<ScholarsCard
							donated='3'
							funded='3'
							fundsLeft='10'
							schoolName='Djed Scholars'
							schoolAlias='Kagumo High'
							infoLink='https://directed.notion.site/Kagumo-High-School-bf13e9c623be4480a5a5c0aac3ebed18'
							image='/static/images/djed-scholars.jpg'
							donateLink='/kagumo'
							stakeAdd='stake178c0hsmp3ya69aqvntdnanp2d3cqaj3kmlmjctalw8k5luq6strwv'
						/>
						<ScholarsCard
							donated='0'
							funded='0'
							fundsLeft='10'
							schoolName="Mang'u High"
							schoolAlias="Mang'u High"
							infoLink='https://directed.notion.site/Mang-u-High-30fe2b6847864743b579dfd38f0d4f46'
							image='/static/images/mangu.jpg'
							donateLink='/mangu'
							stakeAdd='stake178c0hsmp3ya69aqvntdnanp2d3cqaj3kmlmjctalw8k5luq6strwv'
						/>
						<ScholarsCard
							donated='0'
							funded='0'
							fundsLeft='10'
							schoolName="MaryHill Girl's"
							schoolAlias="MaryHill Girl's High"
							infoLink=''
							image='/static/images/mary-hill.jpg'
							donateLink='/maryhill'
							stakeAdd='stake179dedwdltct8y0cfak5x54aemazeay6lxfscee8qeer7esqfswem9'
						/>
						<ScholarsCard
							donated='0'
							funded='0'
							fundsLeft='5'
							schoolName="Ngong Road Children's Foundation"
							schoolAlias="Ngong Road Children's Foundation"
							infoLink=''
							image='/static/images/ngong.jpg'
							donateLink='/Ngong'
							stakeAdd='stake179dedwdltct8y0cfak5x54aemazeay6lxfscee8qeer7esqfswem9'
						/>
					</div>
				</section>
				<section className='home__brands'>
					<p>Partners</p>
					<div className='flex-gap-two'>
						<Image
							src='/static/images/coti-white.png'
							alt='coti'
							width={150}
							height={50}
						/>
						<Image
							src='/static/images/yali.png'
							alt='yali'
							width={65}
							height={65}
						/>
						<Image
							src='/static/images/tally.svg'
							alt='tally'
							width={100}
							height={100}
						/>
						<Image
							src='/static/images/snapbrillia.png'
							alt='snapbrillia'
							width={150}
							height={65}
						/>
						<Image
							src='/static/images/web3ug.png'
							alt='web3ug'
							width={80}
							height={80}
						/>
						<Image
							src='/static/images/cardano-warriors.png'
							alt='web3ug'
							width={100}
							height={80}
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
