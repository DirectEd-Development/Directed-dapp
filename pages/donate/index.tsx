import React from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FaChevronLeft } from 'react-icons/fa'
import { Meta, Modal } from '../../components'

const amounts: string[] = ['₳1000', '₳40']

const Donate: NextPage = () => {
	const [amount, setAmount] = React.useState<string>('')
	const [image, setImage] = React.useState<number | null>(null)
	const [modal, setModal] = React.useState<boolean>(false)
	const router = useRouter()

	const handleDonate = () => {
		if (amount === '₳1000') {
			router.push('https://pay.nmkr.io/?p=fbd4da6ef7b14acda66dff5515877a46&c=1')
		} else {
			if (amount === '₳40')
				router.push(
					'https://pay.nmkr.io/?p=296d3a8e72444590856ccc902b67f9b3&c=1'
				)
		}
	}

	return (
		<>
			<Meta title='Donate' description='Donate to student' />
			<div className='donate-banner'>
				<Image
					className='donate-banner__image'
					src='/static/images/banner.png'
					alt='banner'
					height={500}
					width={1500}
				/>
			</div>
			<main className='donate container'>
				<div className='donate__title-section'>
					<FaChevronLeft
						onClick={() => router.back()}
						className='go-back'
						size={35}
					/>
					<h3>Donate to Kagumo High School</h3>
				</div>
				<div className='donate__donations'>
					<h4>Select Donation Amount</h4>
					<div className='donate__donations-amounts'>
						{amounts.map((amt: string, index: number) => (
							<button
								onClick={() => {
									setAmount(amt)
									setImage(index + 111)
								}}
								className={`${amount === amt ? '' : ''}`}
							>
								{amt}
							</button>
						))}
					</div>
					{amount && (
						<div className='donate__nft-content'>
							<Image
								onClick={() => setModal(true)}
								src={`/static/images/${image ? image : 111}.png`}
								alt='NFT'
								width={100}
								height={100}
								className='donate__nft-image'
							/>
							<p>Click to see a sample NFT</p>
						</div>
					)}
					<button onClick={handleDonate} className=''>
						Donate Now
					</button>
				</div>
			</main>
			{/* <Modal open={modal} onClose={() => setModal(false)} className=''>
				<Image
					src={`/static/images/${image ? image : 111}.png`}
					alt='NFT'
					height={150}
					width={1560}
					className=''
				/>
			</Modal> */}
		</>
	)
}

export default Donate
