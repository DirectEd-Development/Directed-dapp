import { useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { FaChevronLeft } from 'react-icons/fa'
import { Button, Meta, TierCard } from '../../components'
import { lionOptions, noLionOptions } from '../../lib/donorAmounts'
import { OptionTiers } from '../../types/tiers'

const Donate: NextPage = () => {
	const [tier, setTier] = useState<OptionTiers | null>(null)

	const router = useRouter()

	const donationTier = (option: OptionTiers) => {
		setTier({
			title: option.title,
			amount: option.amount,
			image: option.image,
		})
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
						<div>
							<h4>Direct Donation</h4>
							<p>No DirectEd Lions Collection NFT</p>
							<div className='donate__tiers'>
								{noLionOptions.map((option) => (
									<Button
										size='small'
										noShadow
										variant={option.title === tier?.title ? 'primary' : ''}
										onClick={() => donationTier(option)}
									>
										{option.title}
									</Button>
								))}
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
