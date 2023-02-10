import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type LinksType = {
	title: string
	link: string
}

const NavLinks: LinksType[] = [
	{ title: 'Scholarship Pools', link: '#' },
	{ title: 'Scholars’ Progress', link: '#' },
	{ title: 'Transactions', link: '#' },
]

const Footer = () => {
	return (
		<footer className='bg-primary h-fit py-4 w-full'>
			<div className='h-full w-full container flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0'>
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
				<div className='flex flex-col'>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://directed.notion.site/DirectEd-Lions-Terms-Conditions-1f34512058c74546b752a2e549173818'
					>
						<span className='text-white'>Terms and Conditions</span>
					</a>
					<span className='text-white'>
						&copy; {new Date().getFullYear()} DirectEd. All rights reserved.
					</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer
