import { useState, useEffect, useRef } from 'react'
import { useWallet, useWalletList } from '@meshsdk/react'
import Button from '../Button/Button'
import Dropdown from '../Dropdown/Dropdown'
import Image from 'next/image'
import {ModalHandler} from '../Modal/Modal'
import Modal from '../Modal/Modal'

interface Wallet {
	name: string
	icon: string
}

const ConnectWallet = () => {
	const { connect, disconnect, connecting } = useWallet()
	const wallets = useWalletList()

	const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null)
	const [connectionError, setConnectionError] = useState<string | null>(null)

	//error ref
	const errorRef = useRef<ModalHandler>(null)


	useEffect(() => {
		const storedWallet = localStorage.getItem('selectedWallet')
		if (storedWallet) {
			setSelectedWallet(JSON.parse(storedWallet))
			connect(JSON.parse(storedWallet).name)
		}
	}, [])

	const handleWalletSelection = async (wallet: Wallet) => {
		try {
			localStorage.setItem('selectedWallet', JSON.stringify(wallet))
			setSelectedWallet(wallet)
			await connect(wallet.name)
			setConnectionError(null)
		} catch (error: any) {
			setConnectionError(error.message)
			errorRef.current?.openModal()
		}
	}

	const handleDisconnect = () => {
		localStorage.removeItem('selectedWallet')
		disconnect()
		setSelectedWallet(null)
	}

	return (
		<Dropdown
			title={
				<Button variant='accent'>
					{selectedWallet ? (
						<div className='flex-gap'>
							<span>{selectedWallet.name}</span>
							<Image
								src={selectedWallet.icon}
								alt={selectedWallet.name}
								width='30'
								height='30'
							/>
						</div>
					) : connecting ? (
						'Connecting'
					) : (
						<div className='connect-button'>
							<div>Connect Wallet</div>
						</div>
					)}
				</Button>
			}
		>
			<div className='connect-wallet'>
				{!selectedWallet && !connecting && (
					<ul>
						{wallets.map((wallet: Wallet) => (
							<li
								key={wallet.name}
								onClick={() => handleWalletSelection(wallet)}
							>
								<span className='dropdown-button__wallet-name'>
									{wallet.name}
								</span>
								<Image
									src={wallet.icon}
									alt={wallet.name}
									width='30'
									height='30'
								/>
							</li>
						))}
					</ul>
				)}
				{selectedWallet && (
					<div className='connect-wallet__disconnect'>
						<Button variant='outline' onClick={handleDisconnect} noShadow>
							Disconnect
						</Button>
					</div>
				)}
			</div>
			<Modal
						ref={errorRef}
						>
							<div className="error__modal-content">

						
							<div className='modal__title'>
								<h4>Wallet connection error</h4>
							</div>
							<div className='modal__content'>
								<p>{connectionError}</p>
							</div>

							<div className='modal__button'>
								<Button variant='primary' onClick={() => errorRef.current?.closeModal()}>
									Okay
								</Button>
							</div>
							</div>


						</Modal>
		</Dropdown>
	)
}

export default ConnectWallet
