import Image from 'next/image'
import { GrFormClose } from 'react-icons/gr'
import Button from '../Button/Button'
import Modal, { ModalHandler } from '../Modal/Modal'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './RootState'

type TierCardProps = {
	onClick?(event?: React.MouseEvent): void
	title: string
	amount: string
	image?: string,
}

const TierCard = ({ onClick, title, amount, image}: TierCardProps) => {
	const modalRef = useRef<ModalHandler>(null);
	const isClose = useSelector((state: RootState) => state.close.isClosed);
	const openModal = () => modalRef.current?.openModal()
	const closeModal = () => modalRef.current?.closeModal()

	return (
		<>
			<aside className='tier-card'>
				<GrFormClose onClick={onClick} size={25} className='tier-card__close' />
				<h3>{title} Tier Support</h3>
				{image && (
					<Image
						src={image}
						alt={title}
						width={150}
						height={150}
						onClick={openModal}
						className='tier-card__image'
					/>
				)}
				<p>{amount}</p>
				<p>
					You enable one highly-talented student from a low-income family
					background to effectively take part in the DirectEd bootcamp
					supporting them with:
				</p>
				<ul className='tier-card__items'>
					<li>A rental computer</li>
					<li>Wifi at home</li>
					<li>Bus ticket to attend tutorials</li>
					<li>Tutorial Vouchers</li>
				</ul>
				<div>
					<p>An Access scholarship will receive the same Lion Hero NFT.</p>
				</div>
				<h5>In addition, the holder of this NFT receives:</h5>
				<ul className='tier-card__items'>
					<li>
						Invitation for 2 DirectEd Donor's Reception at Oxford or Harvard
					</li>
					<li>Invitation to exclusive Hero and Royal tier donor events</li>
					<li>Full access to the DirectEd bootcamp material and workshop</li>
				</ul>
				<Button variant='primary' disabled={isClose}>Confirm Option</Button>
			</aside>
			{image && (
				<Modal ref={modalRef}>
					<div className='tier-card__preview'>
						<Image
							src={image}
							alt='NFT'
							height={350}
							width={350}
							className='tier-card__preview-image'
						/>
						<GrFormClose
							size={25}
							color={'#ffff'}
							onClick={closeModal}
							className='tier-card__close-preview'
						/>
					</div>
				</Modal>
			)}
		</>
	)
}

export default TierCard
