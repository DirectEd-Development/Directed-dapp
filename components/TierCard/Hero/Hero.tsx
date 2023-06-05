//imports
import React from 'react'
import Link from 'next/link'
import Button from '../../Button/Button'

//types
type HeroTierProps = {
    school: string
}



const Hero = ({school}:HeroTierProps) => {
	return (
        <>
        <p>
            You enable one highly-talented student from a low-income family
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
            <li>Same access and perks as that of the Lion Warriors.</li>
            <li>Access to the bootcamp course material and workshops.</li>
            <li>
                Access to the student-written lore of your partic
                <br /> Hero through our token-gated Lions Gallery.
            </li>
        </ul>
        <Link
            href={{
                pathname: '/nfts/hero',
                query: school,
            }}
        >
            <Button variant='primary'>Confirm Option</Button>
        </Link>
    </>

	)
}

export default Hero
