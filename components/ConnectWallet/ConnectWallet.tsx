import { useState, useEffect } from 'react'
import { useWallet, useWalletList } from '@meshsdk/react'

interface Wallet {
	name: string
	icon: string
}

const ConnectWallet = () => {
	const { wallet, connect, disconnect, connecting } = useWallet()
	const wallets = useWalletList()

	const [isOpen, setIsOpen] = useState(false)
	const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null)

	useEffect(() => {
		const storedWallet = localStorage.getItem('selectedWallet')
		if (storedWallet) {
			setSelectedWallet(JSON.parse(storedWallet))
			connect(JSON.parse(storedWallet).name)
		}
	}, [])

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const handleWalletSelection = (wallet: Wallet) => {
		localStorage.setItem('selectedWallet', JSON.stringify(wallet))
		setSelectedWallet(wallet)
		connect(wallet.name)
		setIsOpen(false)
	}

	const handleDisconnect = () => {
		localStorage.removeItem('selectedWallet')
		disconnect()
		setSelectedWallet(null)
	}

	return (
		<div className='wallet-button'>
			<button
				className='bg-red-500'
				onClick={toggleDropdown}
				onMouseEnter={toggleDropdown}
				// onMouseLeave={toggleDropdown}
			>
				{selectedWallet ? (
					<>
						<span className={`icon-${selectedWallet.icon}`} />
						<span className='dropdown-button__wallet-name'>
							{selectedWallet.name}
						</span>
					</>
				) : connecting ? (
					'Connecting'
				) : (
					'Connect'
				)}
			</button>
			{isOpen && !connecting && (
				<ul className='dropdown-button__dropdown'>
					{wallets.map((wallet: Wallet) => (
						<li key={wallet.name} onClick={() => handleWalletSelection(wallet)}>
							<span className={`icon-${wallet.icon}`} />
							<span className='dropdown-button__wallet-name'>
								{wallet.name}
							</span>
						</li>
					))}
				</ul>
			)}
			{selectedWallet && (
				<button
					className='dropdown-button__disconnect'
					onClick={handleDisconnect}
				>
					Disconnect
				</button>
			)}
		</div>
	)
}

export default ConnectWallet
