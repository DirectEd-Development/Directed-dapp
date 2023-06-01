import React, { useState, useRef } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { FaChevronLeft } from 'react-icons/fa'
import { Button, Meta, Modal } from '../../components'
import { useWallet} from '@meshsdk/react'

import Survey from '../../components/Survey/Survey'

import { Transaction } from '@meshsdk/core'
import { ModalHandler} from '../../components/Modal/Modal'
import {Layout} from '../../components'

const donationAddress =
		'addr_test1qrrft7n0pcscsqf3gfp3teh6c53uv3kq3wd6cwr8xhnthfyvkenauseet2g7ql02zwgl632a9p3uzd0k5skfyzsjk6gsg383v3'

const amounts = ['1000', '300', '100']

const directeddonate: NextPage = () => {
	const [amountSent, setAmountSent] = useState('')
	const [image, setImage] = useState<number | null>(null)
	const [amount, setAmount] = useState('')
	const [isCustom, setIsCustom] = useState(false)
	const [confirm, setConfirm] = useState(false)
	const [processing, setProcessing] = useState(false)
	


	//modal refs
	const successRef = useRef<ModalHandler>(null)
	const confirmRef = useRef<ModalHandler>(null)
	const errorRef = useRef<ModalHandler>(null)
	const feedbackRef = useRef<ModalHandler>(null)

	//error message
	const [errorMessage, setErrorMessage] = useState<string | null>(null)



	const router = useRouter()
	const { wallet, connect, disconnect, connecting, connected } = useWallet()



	//   const { walletConnected, wallet } = useWallet();
	const [successfulTxHash, setSuccessfulTxHash] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)

	const handleConfirm = () => {
		setConfirm(true)
		confirmRef.current?.openModal()
		setIsCustom(false)
	}

	const handleDonate = async (send_amt: string) => {
		setProcessing(true)
		const convertLovelence = parseInt(send_amt) * 1000000
		const sendLovelace = convertLovelence.toString()
		if (connected) {
			setLoading(true)
			const network = await wallet.getNetworkId()
			if (network == 0) {
				setErrorMessage('This dapp only works on Cardano Mainnet.')
				errorRef.current?.openModal()
				setConfirm(false) // reset confirm state after donation is sent
				setProcessing(false)

			} else {
				const tx = new Transaction({ initiator: wallet }).sendLovelace(
					donationAddress,
					sendLovelace
				)
				try {
					const unsignedTx = await tx.build()
					const signedTx = await wallet.signTx(unsignedTx)
					const txHash = await wallet.submitTx(signedTx)
					setSuccessfulTxHash(txHash)
					successRef.current?.openModal()
					setAmountSent(send_amt)
					setConfirm(false) // reset confirm state after donation is sent
					setProcessing(false)

				} catch (error: any) {
					if (error.info) {
						console.log(error.info)
						setErrorMessage(error.info)
						errorRef.current?.openModal()
						
					}
					if(error.message.includes('Insufficient')){
						setErrorMessage(`Insufficient funds in your wallet to send ${send_amt} ADA.
											Please top up your wallet and try again.`)
						errorRef.current?.openModal()
						confirmRef.current?.closeModal()
					}
					else {
						setErrorMessage("Something went wrong. Please try again.")
						errorRef.current?.openModal()
					}
					setProcessing(false)

				}
			}
			setLoading(false)
		} else {
			setErrorMessage('Please connect a wallet.')
			errorRef.current?.openModal()
			setProcessing(false)
			setConfirm(false) // reset confirm state after donation is sent
		}
	}
	// successRef.current?.openModal()
	



	return (
		<Layout>
			<Meta title='Donate' description='Donate to student.' />
			<main className='donate-container text-center'>
				<div className='donate__title-section'>
					<FaChevronLeft
						onClick={() => router.back()}
						className='go-back'
						size={35}
						color={'#374756'}
					/>
					<h3>
						Thank you for supporting the next generation of African tech leaders
					</h3>
				</div>
				<div className='donate-page__donations'>
					<div className='donate__tiers'>
						{amounts.map((amount, index) => (
							<Button
								key={index}
								size='small'
								noShadow
								onClick={() => setAmount(amount)}
							>
								₳{amount}
							</Button>
						))}
						<Button onClick={() => setIsCustom(true)} size='small' noShadow>
							CUSTOM
						</Button>
					</div>
					<p>
						The donation goes to our Cardano wallet with ADAhandle $directeddev
					</p>
					{isCustom && (
						<input
							type='text'
							placeholder='Custom Amount'
							onChange={(e) => setAmount(e.target.value)}
							value={amount}
						/>

					)}
					<div className='donate__donate-btn'>
					<h3>
						Donate to our ADAhandle $directeddev
					</h3>
						{/* <Button
							variant='primary'
							onClick={handleConfirm}
							disabled={!amount}
						>
							Donate
						</Button> */}
					</div>
				</div>

	



				<div>
				<h6>Looking for the DirectEd Lions? Head over
					<a href="https://app.directed.dev/scholarship-pool"> here</a>
					and press "Donate Now" on one Access Stipend pools.
				</h6>
				<h6>Help us improve the donation process!
					<a onClick={() => feedbackRef.current?.openModal()}> Click here</a> to take a short survey.

				</h6>

				</div>


		

			</main>

			{/*Modals*/}
			<Modal 
				ref={confirmRef}
				>
					<div className='confirm__modal-content'>
					
							<div className='confirm__modal-header'>
								<h4>Confirm Donation</h4>
							</div>
							<div className='confirm__modal-body'>
								<span className='amount'>
								Amount: 
								</span>
								<span className="ada">
								₳{amount}
								</span>
							</div>
							<div className='confirm__modal-footer'>
								<Button
								disabled={processing}
								variant='primary' onClick={() => handleDonate(amount)}>
									{processing ? 'Processing...' : 'Confirm'}
								</Button>
								<Button variant='primary' onClick={() =>{
									setConfirm(false);
									confirmRef.current?.closeModal();
								} }>
									Cancel
								</Button>
							</div>
						</div>
				</Modal>
				<Modal 
				ref={successRef}
				>
				<div className='success__modal-content'>
		
				
							<div className='success__modal-header'>
								Thank you for your support! Your <span className='bold-text hash'> ₳{amountSent}</span> donation was well received. Trasaction Hash:<span className='bold-text'> {successfulTxHash}</span> . This will go far in supporting many dreams.
							</div>
						
							<div className='success__modal-footer'>
								<Button
								variant='primary' onClick={() => {
									setConfirm(false)
									successRef.current?.closeModal()
									confirmRef.current?.closeModal();

								}}>
									CLOSE
								</Button>
								</div>
							

						</div>
					</Modal>
					<Modal
						ref={errorRef}
						>
						<div className='error__modal-content'>
							<div className="error__modal-body">
								<p>
									{errorMessage}
								</p>
							</div>
							<div className="error__modal-footer">
								<Button
									variant='primary'
									onClick={() => {
										errorRef.current?.closeModal()
										
										setIsCustom(true)
									}}
								>
									OK
								</Button>
							</div>
						</div>
					</Modal>
					<Modal
						ref={feedbackRef}
						>
		
			
						<div className='feedback__modal-content'>
						<button
							className='close-modal-button'
							onClick={() => {
								setConfirm(false)
								feedbackRef.current?.closeModal()

							}}
						>
							X
						</button>
							<div className="feedback__modal-header">
								<h4>Help us improve the donation process!</h4>
							</div>
							<div className="feedback__modal-body">
							<Survey/>

							</div>

							<div className="feedback__modal-footer">
								<Button
									variant='primary'
									onClick={() => {
										feedbackRef.current?.closeModal()
										
									}}
								>
									CLOSE
								</Button>
							</div>
						</div>
					</Modal>

		</Layout>
	)
}

export default directeddonate
