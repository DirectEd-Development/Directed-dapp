import { useState, useRef } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FaChevronLeft } from 'react-icons/fa'
import { Button, Meta, Modal } from '../../components'
import { ModalHandler } from '../../components/Modal/Modal'
import { amounts } from '../../lib/donorAmounts'
import { GrFormClose } from 'react-icons/gr'

// const amounts: string[] = ['₳2000', '₳1000', '₳40']

const Donate: NextPage = () => {
	const [amount, setAmount] = useState<string>('')
	const [image, setImage] = useState<number | null>(null)

	const modalRef = useRef<ModalHandler>(null)

	const router = useRouter()

	const handleDonate = () => {
		if (amount === '₳1000' || amount === '₳2000') {
			router.push('https://pay.nmkr.io/?p=fbd4da6ef7b14acda66dff5515877a46&c=1')
		} else {
			if (amount === '₳40')
				router.push(
					'https://pay.nmkr.io/?p=296d3a8e72444590856ccc902b67f9b3&c=1'
				)
		}
	}

	const openModal = () => modalRef.current?.openModal()

	const closeModal = () => modalRef.current?.closeModal()

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
						color={'#374756'}
					/>
					<h3>Donate to Kagumo High School</h3>
				</div>
				<div className='donate__donations'>
					<h4>DirectEd Lions Collection</h4>

					<div className='donate__donations-amounts'>
						{amounts.map((amt, index: number) => (
							<Button
								size='small'
								variant={amt.amount === amount ? 'primary' : ''}
								onClick={() => {
									setAmount(amt.amount)
									setImage(index + 111)
								}}
								key={amt.amount}
								// className={`${amount === amt ? '' : ''}`}
								noShadow
							>
								{amt.title}
							</Button>
						))}
					</div>
					{amount && (
						<div className='donate__nft-content'>
							<Image
								onClick={openModal}
								src={`/static/images/${image ? image : 111}.png`}
								alt='NFT'
								width={100}
								height={100}
								className='donate__nft-image'
							/>

							<p>Click to see a sample NFT</p>
						</div>
					)}
					<Button onClick={handleDonate} variant='primary'>
						Donate Now
					</Button>
				</div>
			</main>
			<Modal ref={modalRef}>
				<div className='donate__preview'>
					<Image
						src={`/static/images/${image ? image : 111}.png`}
						alt='NFT'
						height={350}
						width={350}
						className='donate__preview-image'
					/>
					<GrFormClose
						size={25}
						color='white'
						onClick={closeModal}
						className='donate__close-preview'
					/>
				</div>
			</Modal>
		</>
	)
}

export default Donate
