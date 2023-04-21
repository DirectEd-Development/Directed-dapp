import Link from 'next/link'
import React from 'react'
import Button from '../Button/Button'

const Footer = () => {
	return (
		<footer className='bg-primary footer'>
			<div className='footer__content'>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://directed.notion.site/Donation-Portal-Help-78d35a59263647dda6faac4e01cb99e2'
				>
					<Button variant='secondary' noShadow>
						need help?
					</Button>
				</a>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://directed.notion.site/DirectEd-FAQ-1724d908f29f4b1eb1ee4b98e64cff7e'
				>
					<Button variant='secondary' noShadow>
						FAQ
					</Button>
				</a>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.notion.so/directed/Privacy-Policy-277f03fc6e3645aa8bcae404a21e931d?pvs=4'
				>
					<Button variant='secondary' noShadow>
						privacy policy
					</Button>
				</a>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://docs.google.com/forms/d/e/1FAIpQLSfx_FCw99hQ7Dg5zviHa1EaeCShy57ftmpf-p2tDAKacptIsA/viewform?usp=sf_link'
				>
					<Button variant='secondary' noShadow>
						have a suggestion?
					</Button>
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
