import React, { useState, useRef, useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { FaChevronLeft } from 'react-icons/fa'
import { Button, Meta, Modal } from '../../components'
import { useWallet, useWalletList } from '@meshsdk/react'
import Survey from '../../components/Survey/Survey'
// import useWallet from "../../contexts/wallet";
// import { Transaction } from "@martifylabs/mesh";
import { Transaction } from '@meshsdk/core'
import { ModalHandler} from '../../components/Modal/Modal'


//modal
// import { Modal} from 'reactstrap'
const donationAddress =
		'addr_test1qrrft7n0pcscsqf3gfp3teh6c53uv3kq3wd6cwr8xhnthfyvkenauseet2g7ql02zwgl632a9p3uzd0k5skfyzsjk6gsg383v3'

const amounts = ['1000', '300', '100']

const directeddonate: NextPage = () => {
	const [amountSent, setAmountSent] = useState('')
	const [image, setImage] = useState<number | null>(null)
	const [amount, setAmount] = useState('')
	const [isCustom, setIsCustom] = useState(false)
	const [confirm, setConfirm] = useState(false) // add confirm state
	const [processing, setProcessing] = useState(false)


	//modal refs
	const feedbackRef = useRef<ModalHandler>(null)
	const confirmRef = useRef<ModalHandler>(null)



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
			if (network == 1) {
				alert('This dapp only works on Cardano Mainnet.')
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
					setAmountSent(send_amt)
					setConfirm(false) // reset confirm state after donation is sent
				} catch (error: any) {
					if (error.info) {
						console.log(error.info)
						alert(error.info)
					} else {
						console.log(error)
						alert('Transaction failed')
					}
					setProcessing(false)

				}
			}
			setLoading(false)
		} else {
			alert('Please connect a wallet.')
		}
	}

	const handleSent = () => {
		router.push('/?from=donation')
		feedbackRef.current?.closeModal
	}
	/*Listen for successful transaction hash and open modal*/

	useEffect(
		()=>{
			if(successfulTxHash){
				feedbackRef.current?.openModal()
	
			}
	}, [successfulTxHash])

	confirmRef.current?.openModal()


	return (
		<>
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
						<Button
							variant='primary'
							onClick={handleConfirm}
							disabled={!amount}
						>
							Donate
						</Button>
					</div>
				</div>

				<Modal 
				ref={confirmRef}
				>
					<div className='donate__modal-container'>
							<div className='donate__modal-header'>
								<h4>Confirm Donation</h4>
							</div>
							<div className='donate__modal-body'>
								<span className='amount'>
								Amount: 
								</span>
								<span className="ada">
								₳{amount}
								</span>
							</div>
							<div className='donate__modal-footer'>
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
				ref={feedbackRef}
				>
				<div className='donate__modal-content'>
			
							<div className='donate__modal-header'>
								<h4>Thank you for your donation!</h4>
							</div>
							<div className='donate__modal-body'>
								<h5>Amount Sent:</h5>
								<p>₳{amountSent}</p>
								<h5>Transaction Hash:</h5>
								<p>{successfulTxHash}</p>
							</div>
							<div className='donate__modal-footer'>
								<Button onClick={handleSent} variant='outline' size='small' noShadow>X</Button>
							</div>
							<Survey/>

						</div>
					</Modal>

				<div>
				<h6>Looking for the DirectEd Lions? Head over
					<a href="https://app.directed.dev/scholarship-pool"> here</a>
					and press "Donate Now" on one Access Stipend pools.
				</h6>
				</div>
		

			</main>
		</>
	)
}

export default directeddonate
