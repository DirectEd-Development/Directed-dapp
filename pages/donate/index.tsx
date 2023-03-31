import { useState, useRef } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FaChevronLeft } from 'react-icons/fa'
import { Button, Meta, Modal, TierCard } from '../../components'
import { ModalHandler } from '../../components/Modal/Modal'
import { amounts, options } from '../../lib/donorAmounts'
import { GrFormClose } from 'react-icons/gr'

// const amounts: string[] = ['₳2000', '₳1000', '₳40']

const Donate: NextPage = () => {
	const [amount, setAmount] = useState<string>('')
	const modalRef = useRef<ModalHandler>(null)

	const router = useRouter()

	// const handleDonate = () => {
	// 	if (amount === '₳1000' || amount === '₳2000') {
	// 		router.push('https://pay.nmkr.io/?p=fbd4da6ef7b14acda66dff5515877a46&c=1')
	// 	} else {
	// 		if (amount === '₳40')
	// 			router.push(
	// 				'https://pay.nmkr.io/?p=296d3a8e72444590856ccc902b67f9b3&c=1'
	// 			)
	// 	}
	// }

	const openModal = () => modalRef.current?.openModal()

	const closeModal = () => modalRef.current?.closeModal()

	return (
		<>
			<Meta title='Donate' description='Donate to student' />
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
					<div className='donate__tier-options'>
						<div>
							<h4>DirectEd Lions Collection</h4>
							<p>Donate and receive a DirectEd Lions NFT</p>
							<p>Click tiers to learn more</p>
							<div className='donate__tiers'>
								{amounts.map((amt, index: number) => (
									<Button
										size='small'
										variant={amt.title === amount ? 'primary' : ''}
										onClick={() => setAmount(amt.title)}
										key={amt.amount}
										noShadow
									>
										{amt.title}
									</Button>
								))}
							</div>
						</div>
						<div>
							<h4>Direct Donation</h4>
							<p>No DirectEd Lions Collection NFT</p>
							<div className='donate__tiers'>
								{options.map((option) => (
									<Button
										size='small'
										noShadow
										variant={option.title === amount ? 'primary' : ''}
										onClick={() => setAmount(option.title)}
									>
										{option.title}
									</Button>
								))}
							</div>
						</div>
					</div>
					{amount && <TierCard onClick={() => setAmount('')} />}
				</div>
			</main>
			<Modal ref={modalRef}>
				<div className='donate__preview'>
					{/* <Image
						src={`/static/images/${image ? image : 111}.png`}
						alt='NFT'
						height={350}
						width={350}
						className='donate__preview-image'
					/> */}
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
