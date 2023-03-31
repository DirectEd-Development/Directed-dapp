import Image from 'next/image'
import { GrFormClose } from 'react-icons/gr'
import Button from '../Button/Button'

//TODO: aDD MODAL FOR IMAGE HERE

type TierCardProps = {
	onClick?(event?: React.MouseEvent): void
}

const TierCard = ({ onClick }: TierCardProps) => {
	return (
		<aside className='tier-card'>
			<GrFormClose onClick={onClick} size={25} className='tier-card__close' />
			<h3>Hero Tier Support</h3>
			<Image src='/static/images/2.png' alt='hero' width={150} height={150} />
			<p>1000 ADA (~$300-$350)</p>
			<p>
				You enable one highly-talented student from a low-income family
				background to effectively take part in the DirectEd bootcamp supporting
				them with:
			</p>
			<ul className='tier-card__items'>
				<li>A rental computer</li>
				<li>Wifi at home</li>
				<li>Bus ticket to attend tutorials</li>
				<li>Tutorial Vouchers</li>
			</ul>
			<div>
				<p>An Access scholarship will receive the same Lion Hero NFT.</p>
			</div>
			<h5>In addition, the holder of this NFT receives:</h5>
			<ul className='tier-card__items'>
				<li>
					Invitation for 2 DirectEd Donor's Reception at Oxford or Harvard
				</li>
				<li>Invitation to exclusive Hero and Royal tier donor events</li>
				<li>Full access to the DirectEd bootcamp material and workshop</li>
			</ul>
			<Button variant='primary'>Confirm Option</Button>
		</aside>
	)
}

export default TierCard
