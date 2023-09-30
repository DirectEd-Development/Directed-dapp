import Image from 'next/image'
import { GrFormClose } from 'react-icons/gr'
import Button from '../Button/Button'
import Modal, { ModalHandler } from '../Modal/Modal'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './RootState'
import { useWallet, useAddress } from '@meshsdk/react'
import Link from 'next/link'
import { Transaction } from '@meshsdk/core'
import React from 'react'
import axios from 'axios'

type MaryHillsProps = {
	onClick?(event?: React.MouseEvent): void
	title: string
	amount: string
	image?: string
	school: string
}

const donationAddress =
	'addr1x8c0hsmp3ya69aqvntdnanp2d3cqaj3kmlmjctalw8k5lu8sl0pkrzfm5t6qexkm8mxz5mrspm9rdhlh9shm7u0dflcqjcd9va'

const MaryHills = ({
	onClick,
	title,
	amount,
	image,
	school,
}: MaryHillsProps) => {
	const [amountSent, setAmountSent] = useState('')
	const [confirm, setConfirm] = useState(false)
	const { wallet, connect, disconnect, connecting, connected } = useWallet()
	const [successfulTxHash, setSuccessfulTxHash] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)
	const address = useAddress()

	const handleDonate = async (send_amt: string) => {
		const convertLovelence = parseInt(send_amt) * 1000000
		const sendLovelace = convertLovelence.toString()
		if (connected) {
			setLoading(true)
			const network = await wallet.getNetworkId()
			if (network == 1) {
				alert('This dapp only works on Cardano Testnet.')
			} else {
				const tx = new Transaction({ initiator: wallet }).sendLovelace(
					donationAddress,
					sendLovelace
				)
				try {
					const unsignedTx = await tx.build()
					const signedTx = await wallet.signTx(unsignedTx)
					const txHash = await wallet.submitTx(signedTx)
					const res = await axios.post(
						'https://app.directed.dev/api/transactions',
						{
							amount: send_amt,
							transactionHash: txHash,
							walletAddress: address,
						}
					)
					setSuccessfulTxHash(txHash)
					setAmountSent(send_amt)
					setConfirm(false) // reset confirm state after donation is sent
				} catch (error: any) {
					if (error.info) {
						alert(error.info)
					} else {
						console.log(error)
					}
				}
			}
			setLoading(false)
		} else {
			alert('Please connect a wallet.')
		}
	}

	const modalRef = useRef<ModalHandler>(null)
	const isClose = useSelector((state: RootState) => state.close.isClosed)
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
				<p>₳{amount}</p>
				{title == 'Royal' && (
					<>
						<p>
							You enable 2 highly-talented students from a low-income family
							background to effectively take part in the DirectEd bootcamp
							supporting them with:
						</p>
						<ul className='tier-card__items'>
							<li>Rental computer</li>
							<li>WiFi or mobile data</li>
							<li>Tutorial vouchers</li>
							<li>Pocket money for living expenses</li>
						</ul>
						<h5>We show our appreciation in the following ways:</h5>
						<ul className='tier-card__items'>
							<li>
								Same access and perks as that of the Lion Warriors and Heroes.
							</li>
							<li>
								Invitation to the exclusive DirectEd Donor's Dinner in Oxford.
							</li>
							<li>
								{' '}
								<b>Nameplate</b> recognition in the school of the pool you
								supported.
							</li>
						</ul>
						<Link
							href={{
								pathname: '/nfts/royal',
								query: school,
							}}
						>
							<Button variant='primary'>Confirm Option</Button>
						</Link>
					</>
				)}
				{title == 'Hero' && (
					<>
						<p>
							You enable one highly-talented student from a low-income family
							background to effectively take part in the DirectEd bootcamp
							supporting them with:
						</p>
						<ul className='tier-card__items'>
							<li>Rental computer</li>
							<li>WiFi or mobile data</li>
							<li>Tutorial vouchers</li>
							<li>Pocket money for living expenses</li>
						</ul>
						<h5>We show our appreciation in the following ways:</h5>
						<ul className='tier-card__items'>
							<li>Same access and perks as that of the Lion Warriors.</li>
							<li>Access to the bootcamp course material and workshops.</li>
							<li>
								Access to the student-written lore of your particular Lion{' '}
								<br /> Hero through our token-gated Lions Gallery.
							</li>
						</ul>
						<Link
							href={{
								pathname: '/nfts/hero',
								query: school,
							}}
						>
							<Button variant='primary'>Confirm Option</Button>
						</Link>
					</>
				)}
				{title == 'Warrior' && (
					<>
						<p>
							You contribute to a Access Stipend pool where funds will be pooled
							to enable a talented student from a low-income family background
							to take part in the DirectEd bootcamp by supporting them with:
						</p>
						<ul className='tier-card__items'>
							<li>Rental computer</li>
							<li>WiFi or mobile data</li>
							<li>Tutorial vouchers</li>
							<li>Pocket money for living expenses</li>
						</ul>
						<h5>We show our appreciation in the following ways:</h5>
						<ul className='tier-card__items'>
							<li>
								Invitation to exclusive online and in-person DirectEd Lions
								events
							</li>
							<li>
								Access to the Student's Progress page, enabling you to observe
								how <br /> funds are used and observe students' achievements.
							</li>
							<li>
								Direct access to the open-source code of projects built by
								students.
							</li>
						</ul>
						<Link
							target='_blank'
							href='https://pay.nmkr.io/?p=a151e45d5b5b4ac1a7fc7a8983338992&c=1'
						>
							<Button variant='primary'>Confirm Option</Button>
						</Link>
					</>
				)}

				{title == 'Custom' && (
					<>
						<p>
							You contribute to a Access Stipend pool where funds will be pooled
							to enable a talented student from a low-income family background
							to take part in the DirectEd bootcamp by supporting them with:
						</p>
						<ul className='tier-card__items'>
							<li>Rental computer</li>
							<li>WiFi or mobile data</li>
							<li>Tutorial vouchers</li>
							<li>Pocket money for living expenses</li>
						</ul>
						<Button onClick={() => handleDonate(amount)} variant='primary'>
							Confirm Option
						</Button>
					</>
				)}

				{title == 'One Access Stipend' && (
					<>
						<p>
							You enable one highly-talented student from a low-income family
							background to effectively take part in the DirectEd bootcamp
							supporting them with:
						</p>
						<ul className='tier-card__items'>
							<li>Rental computer</li>
							<li>WiFi or mobile data</li>
							<li>Tutorial vouchers</li>
							<li>Pocket money for living expenses</li>
						</ul>
						<h5>We show our appreciation in the following ways:</h5>
						<ul className='tier-card__items'>
							<li>Same access and perks as that of the Lion Warriors.</li>
							<li>Access to the bootcamp course material and workshops.</li>
							<li>
								Access to the student-written lore of your particular <br />{' '}
								Lion Hero through our token-gated Lions Gallery.
							</li>
						</ul>
						<Button onClick={() => handleDonate(amount)} variant='primary'>
							Confirm Option
						</Button>
					</>
				)}

				{successfulTxHash && (
					<div className='donate__modal-container'>
						<div className='donate__modal'>
							<div className='donate__modal-header'>
								<h4>Thank you for your donation!</h4>
							</div>
							<div className='donate__modal-body'>
								<h5>Amount Sent:</h5>
								<p>₳{amountSent}</p>
								<h5>Transaction Hash:</h5>
								<p>{successfulTxHash}</p>
							</div>
						</div>
					</div>
				)}
				{/* 
					*** This button was commented to reactivate the state for all tier options, all functionalities are still kept for future purpose. ***
				<Button onClick={() => handleDonate(amount)} variant='primary'>Confirm Option</Button> */}
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

export default MaryHills
