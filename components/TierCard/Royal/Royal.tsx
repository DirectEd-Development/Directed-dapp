//imports
import React from 'react'
import Link from 'next/link'
import Button from '../../Button/Button'

//types
type RoyalTierProps = {
    school: string
}



const RoyalTier = ({school}:RoyalTierProps) => {
	return (
		<>
		<p>
			You enable 2 highly-talented students from a low-income family
			background to effectively take part in the DirectEd bootcamp
			supporting them with:
		</p>
		<ul className='tier-card__items'>
			<li>Rental computer</li>
			<li>WiFi or mobile data</li>
			<li>Tutorial vouchers</li>
			<li>Pocket money for living expenses</li>
		</ul>
		<h5>We show our appreciation in the following ways:</h5>
		<ul className='tier-card__items'>
			<li>
				Same access and perks as that of the Lion Warriors and Heroes.
			</li>
			<li>
				Invitation to the exclusive DirectEd Donor's Dinner in Oxford.
			</li>
			<li>
				<b>Nameplate</b> recognition in the school of the pool you
				supported.
			</li>
		</ul>
		<Link
			href={{
				pathname: '/nfts/royal',
				query: school,
			}}
		>
			<Button variant='primary'>Confirm Option</Button>
		</Link>
	</>
	)
}

export default RoyalTier
