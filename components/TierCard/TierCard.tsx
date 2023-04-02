import Image from 'next/image'
import { GrFormClose } from 'react-icons/gr'
import Button from '../Button/Button'
import Modal, { ModalHandler } from '../Modal/Modal'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './RootState'
import { useWallet, useWalletList } from "@meshsdk/react";
import { Transaction } from "@meshsdk/core";
import React  from "react";

type TierCardProps = {
	onClick?(event?: React.MouseEvent): void
	title: string
	amount: string
	image?: string,
}

const donationAddress =
  "addr1x8c0hsmp3ya69aqvntdnanp2d3cqaj3kmlmjctalw8k5lu8sl0pkrzfm5t6qexkm8mxz5mrspm9rdhlh9shm7u0dflcqjcd9va";


const TierCard = ({ onClick, title, amount, image}: TierCardProps) => {
	const [amountSent, setAmountSent] = useState("");
	const [adaamount, setAmount] = useState("");
	const [isCustom, setIsCustom] = useState(false);
	const [confirm, setConfirm] = useState(false); 
	const { wallet, connect, disconnect, connecting, connected } = useWallet();
	const [successfulTxHash, setSuccessfulTxHash] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);



	const handleDonate = async (send_amt: string) => {
		const convertLovelence = parseInt(send_amt) * 1000000;
		const sendLovelace = convertLovelence.toString();
		if (connected) {
		  setLoading(true);
		  const network = await wallet.getNetworkId();
		  if (network == 0) {
			alert("This dapp only works on Cardano Mainnet.");
		  } else {
			const tx = new Transaction({ initiator: wallet }).sendLovelace(
			  donationAddress,
			  sendLovelace
			);
			try {
			  const unsignedTx = await tx.build();
			  const signedTx = await wallet.signTx(unsignedTx);
			  const txHash = await wallet.submitTx(signedTx);
			  setSuccessfulTxHash(txHash);
			  setAmountSent(send_amt);
			  setConfirm(false); // reset confirm state after donation is sent
			} catch (error: any) {
			  if (error.info) {
				alert(error.info);
			  } else {
				console.log(error);
			  }
			}
		  }
		  setLoading(false);
		} else {
		  alert("Please connect a wallet.");
		}
	  };
	
	//   const handleSent = () => {
	// 	router.push("/?from=donation");
	//   };

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
					<p>Each Access Scholar will receive a corresponding Lion Hero.</p>
					{/* <Button onClick={() => setIsCustom(true)} size="small" noShadow>
						CUSTOM
					</Button> */}
				</div>
				<h5>In addition, the holder of this NFT receives:</h5>
				<ul className='tier-card__items'>
					<li>
						Invitation for 2 DirectEd Donor's Reception at Oxford or Harvard
					</li>
					<li>Invitation to exclusive Hero and Royal tier donor events</li>
					<li>Full access to the DirectEd bootcamp material and workshop</li>
				</ul>
					{isCustom && (
						<input
						type="text"
						placeholder="Custom Amount"
						onChange={(e) => setAmount(e.target.value)}
						value={amount}
						/>
					)}
					{successfulTxHash && (
					<div className="donate__modal-container">
						<div className="donate__modal">
							<div className="donate__modal-header">
								<h4>Thank you for your donation!</h4>
							</div>
							<div className="donate__modal-body">
								<h5>Amount Sent:</h5>
								<p>₳{amountSent}</p>
								<h5>Transaction Hash:</h5>
								<p>{successfulTxHash}</p>
							</div>
						</div>
					</div>
					)}
				<Button onClick={() => handleDonate(amount)} variant='primary' disabled={isClose}>Confirm Option</Button>
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
