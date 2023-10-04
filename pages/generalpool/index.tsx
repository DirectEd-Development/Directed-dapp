import { useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { FaChevronLeft } from 'react-icons/fa'
import { Button, CustomAmountInput, Layout, Meta, TierCard } from '../../components'
import { lionOptions, noLionOptions } from '../../lib/donorAmounts'
import { useDispatch } from 'react-redux'
import { OptionTiers } from '../../types/tiers'
import { setClose, setOpen } from '../../hooks/redux/closeTier'

const GeneralPool: NextPage = () => {
	const [tier, setTier] = useState<OptionTiers | null>(null)
	const [isCustom, setIsCustom] = useState(false)
	const [custom, setCustom] = useState('')

	const dispatch = useDispatch()
	const router = useRouter()

	const donationTier = (option: OptionTiers) => {
		setTier({
			title: option.title,
			amount: option.amount,
			image: option.image,
			school: 'generalpool',
		})
		dispatch(setClose())
	}

	const handleCustom = () => {
		setIsCustom(false)
		setTier({
			title: 'Custom',
			amount: custom,
			image: '',
			school: 'generalpool',
		})
		dispatch(setOpen())
	}

	const fullDonationTier = (option: OptionTiers) => {
		if (option.amount == 'custom') {
			setIsCustom(true)
		} else {
			setTier({
				title: option.title,
				amount: option.amount,
				image: option.image,
				school: 'generalpool',
			})
			dispatch(setOpen())
		}
	}

	return (
		<Layout>
			<Meta title='Donate' description='Donate to student' />
			<main className='donate container'>
				<div className='donate__donations'>
					<div className='donate__tier-options'>
						<div className='donate__title-section'>
							<FaChevronLeft
								onClick={() => router.back()}
								className='go-back'
								size={35}
								color={'#374756'}
							/>
						</div>
						<div>
							<h3>Donate to DirectEd General Pool</h3>
							<h4>DirectEd Lions Collection</h4>

							{/* <p>
								<span>
									Donate using using credit card, $ADA, $SOL, $ETH
								</span>
							</p> */}
              
							<p>Click tiers to learn more</p>
							<div className='donate__tiers'>
								{lionOptions.map((option, index) => (
									<Button
										size='small'
										variant={option.title === tier?.title ? 'primary' : ''}
										onClick={() => donationTier(option)}
										key={index}
										noShadow
									>
										{option.title}
									</Button>
								))}
							</div>
						</div>
						<div className='donate__info'>
							<span> Direct Donation</span>
							<p>No DirectEd Lions Collection NFT</p>
							<div className='donate__buttons'>

								<a href="https://donate.stripe.com/dR64k17ref2n8QE8wD" target='_blank'>
									<Button size='small' noShadow>
										$500
									</Button>
								</a>
								<a href="https://donate.stripe.com/14k3fX8vi6vR9UIcMW" target='_blank'>
									<Button size='small' noShadow>
										$1,100
									</Button>
								</a>
							</div>
						</div>
					</div>
					<div className='tier'>
						{tier && (
							<TierCard
								onClick={() => setTier(null)}
								title={tier?.title}
								amount={tier?.amount}
								image={tier?.image}
								school={tier?.school}
							/>
						)}
					</div>
				</div>
			</main>
		</Layout>
	)
}

export default GeneralPool
