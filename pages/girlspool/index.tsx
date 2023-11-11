import { useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { FaChevronLeft } from 'react-icons/fa'
import GirlsCard from '../../components/TierCard/GirlsCard'
import { Button, CustomAmountInput, Meta, Layout, TierCard } from '../../components'
import { lionOptions, noLionOptions } from '../../lib/donorAmounts'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { OptionTiers } from '../../types/tiers'
import Timer from '../../components/Timer/Timer';
import { setClose, setOpen } from '../../hooks/redux/closeTier'

const GirlsPool: NextPage = () => {
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
			school: "girlspool",
		});
		dispatch(setClose())
	}

	const handleCustom = () => {
		setIsCustom(false);
		setTier({
			title: "Custom",
			amount: custom,
			image: "",
			school: "girlspool"
		});
		dispatch(setOpen())
	}

	const fullDonationTier = (option: OptionTiers) => {
		if (option.amount == "custom") {
			setIsCustom(true);
		} else {
			setTier({
				title: option.title,
				amount: option.amount,
				image: option.image,
				school: "girlspool",
			});
			dispatch(setOpen())
		}
	}


	return (
		<Layout>
			<Meta title='Donate' description='Donate to student' />
			<main className='donate container'>
				<div className='donate__donations'>
					<div
						
					 className={`donate__tier-options ${tier?'hideDonate':''} `}
					 >
						<div className="donate__title-section">
							<FaChevronLeft
								onClick={() => router.back()}
								className='go-back'
								size={35}
								color={'#374756'}
							/>
						</div>
						<div>
							<h3>Fund scholarships with crypto - get a DirectEd Lion NFT</h3>
							<h4>DirectEd Lions Collection</h4>
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
							<span> Fund scholarships with credit card</span>
							<p>No DirectEd Lions Collection NFT</p>

							<div className='donate__buttons'>
								
								<Link href="https://donate.stripe.com/5kA17P26U6vR9UIdQV" target='_blank'>
									<Button size='small' noShadow>
										$500
									</Button>
								</Link>
								<Link href="https://donate.stripe.com/5kAbMt12QbQb4Ao5ks" target='_blank'>
									<Button size='small' noShadow>
										$1100
									</Button>
								</Link>
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

export default GirlsPool
