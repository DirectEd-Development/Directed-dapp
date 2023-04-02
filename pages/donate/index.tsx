import { useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { FaChevronLeft } from 'react-icons/fa'
import { Button, CustomAmountInput, Meta, TierCard } from '../../components'
import { lionOptions, noLionOptions } from '../../lib/donorAmounts'
import { useDispatch } from 'react-redux'
import { OptionTiers } from '../../types/tiers'
import Timer from '../../components/Timer/Timer';
import { setClose, setOpen } from '../../hooks/redux/closeTier'

const Donate: NextPage = () => {
	const [tier, setTier] = useState<OptionTiers | null>(null);
	const [isCustom, setIsCustom] = useState(false);
	const [custom, setCustom] = useState("");

	const dispatch = useDispatch();
	const router = useRouter()

	const donationTier = (option: OptionTiers) => {
		setTier({
			title: option.title,
			amount: option.amount,
			image: option.image,
		});
		dispatch(setClose())
	}

	const handleCustom = () => {
		setIsCustom(false);
		setTier({
			title: "Custom",
			amount: custom,
			image: "",
		});
		dispatch(setOpen())
	}

	const fullDonationTier = (option: OptionTiers) => {
		 if(option.amount == "custom"){
			setIsCustom(true);
		 } else {
			setTier({
				title: option.title,
				amount: option.amount,
				image: option.image,
			});
			dispatch(setOpen())
		 }
	}

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
								{lionOptions.map((option) => (
									<Button
										size='small'
										variant={option.title === tier?.title ? 'primary' : ''}
										onClick={() => donationTier(option)}
										key={option.amount}
										noShadow
									>
										{option.title}
									</Button>
								))}
							</div>
						</div>
						<div className='donate__info'>
							<h4>Direct Donation</h4>
							<p>No DirectEd Lions Collection NFT</p>
							{isCustom ? (
								<div className='donate__tiers'>
								<input
									 type="text"
									 placeholder="Custom Amount"
									 onChange={(e) => setCustom(e.target.value)}
								/>
								<Button
									size='small'
									noShadow
									onClick={handleCustom}
								>
									Donate
								</Button>
							</div>
							): (
								<div className='donate__tiers'>
								{noLionOptions.map((option) => (
									<Button
										size='small'
										noShadow
										variant={option.title === tier?.title ? 'primary' : ''}
										onClick={() => fullDonationTier(option)}
									>
										{option.title}
									</Button>
								))}
							</div>
							)}
							<div className='donate__timer'>
								<h5>Time until minting opens <Timer targetDay={17} targetMonth={4} targetYear={2023} /></h5>
							</div>
						</div>
					</div>
					{tier && (
						<TierCard
							onClick={() => setTier(null)}
							title={tier?.title}
							amount={tier?.amount}
							image={tier?.image}
						/>
					)}
				</div>
			</main>
		</>
	)
}

export default Donate
