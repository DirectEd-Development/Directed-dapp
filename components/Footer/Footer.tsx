import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<footer className='bg-primary footer'>
			<div className='footer__content container'>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://directed.notion.site/Donation-Portal-Help-78d35a59263647dda6faac4e01cb99e2'
				>
					<button className='btn btn-sm bg-primary-light border-none hover:bg-primary-light hover:border-none text-white'>
						need help?
					</button>
				</a>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://docs.google.com/forms/d/e/1FAIpQLSfx_FCw99hQ7Dg5zviHa1EaeCShy57ftmpf-p2tDAKacptIsA/viewform?usp=sf_link'
				>
					<button className='btn btn-sm bg-primary-light border-none hover:bg-primary-light hover:border-none text-white'>
						have a suggestion?
					</button>
				</a>
				<div>
					<Link
						href='https://directed.notion.site/DirectEd-Lions-Terms-Conditions-1f34512058c74546b752a2e549173818'
						target='_blank'
						rel='noopener noreferrer'
					>
						Terms and Conditions
					</Link>
					<p className='text-white'>
						&copy; {new Date().getFullYear()} DirectEd. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
