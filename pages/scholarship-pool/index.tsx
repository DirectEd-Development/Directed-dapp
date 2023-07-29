import type { NextPage } from 'next'
import { Meta, DonorInfoTab, ScholarsCard, Layout } from '../../components'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import PopupModal from '../../components/PopupModal/PopupModal'


interface TransactionCount {
	tx_hash: string
}

const ScholarshipPool: NextPage = () => {

	const [isOpen, setIsOpen] = useState<boolean>(true);

	const closeModal = () => {
		setIsOpen(false);
	};
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleReopenModal = () => {
		setIsModalOpen(true);
	};
	const [wallet1, setWallet1] = useState<TransactionCount[]>([]);
	const [wallet2, setWallet2] = useState<TransactionCount[]>([]);

	// Fetch number of transactions in a wallet address
	useEffect(() => {
		fetch(
			'https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1xyvc346z883y6x5a07f602kywnalnnpvljqfearrrgxjl4jmj6um7hskwglsnmdgdftmnh69n6f47vnp3njwpnj8anqqzvx2fl/transactions?count=100&order=desc',
			{
				headers: {
					project_id: 'mainnetDmoF1dWjxVsomHBGoDEtqILefsKyDGPx',
				},
			}
		)
			.then((response) => response.json())
			.then((data) => {
				setWallet1(data)
			})

		fetch(
			'https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1x8c0hsmp3ya69aqvntdnanp2d3cqaj3kmlmjctalw8k5lu8sl0pkrzfm5t6qexkm8mxz5mrspm9rdhlh9shm7u0dflcqjcd9va/transactions?count=100&order=desc',
			{
				headers: {
					project_id: 'mainnetDmoF1dWjxVsomHBGoDEtqILefsKyDGPx',
				},
			}
		)
			.then((response) => response.json())
			.then((data) => {
				setWallet2(data)
			})
	}, [])

	return (
		<Layout>
			
			<PopupModal isOpen={isModalOpen} closeModal={handleCloseModal} handleReopenModal={handleReopenModal} />
			{isModalOpen && (
				<button onClick={handleReopenModal}></button>
			)}
			<Meta title='Scholarship Pools' description='Scholarship Pools Page' />
			<main className='scholarship-pool container'>
				<button className='OpenButton' onClick={handleOpenModal}><img src="/static/images/question_mark.png" alt="open modal icon" width="30px" height="30px" /></button>
				<section className='scholarship-pool__title'>
					<h3>How We Show Appreciation To Our Supporters</h3>
					<DonorInfoTab />
				</section>
				<section className='scholarship-pool__potrait-section'>
					<h3>Access Stipend Scholarship Crowdfunding Pools</h3>
					<h5>
						Press the ‘Donate now’ button of the stipend pool you want to
						contribute to and see the DirectEd Lions minting tier options
					</h5>
					<div className='scholarship-pool__potrait-cards'>
						<ScholarsCard
							donated={wallet2.length}
							funded=''
							fundsLeft=''
							schoolName='DirectEd'
							schoolAlias='Kagumo High'
							infoLink=''
							image='/static/images/directed.jpg'
							donateLink='/kagumo'
							stakeAdd='stake178c0hsmp3ya69aqvntdnanp2d3cqaj3kmlmjctalw8k5luq6strwv'
							nftsleft=''
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
		</Layout>
	)
}

export default ScholarshipPool
