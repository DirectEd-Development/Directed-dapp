import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import ConnectWallet from '../ConnectWallet/ConnectWallet'

type LinksType = {
	title: string
	link: string
}

const NavLinks: LinksType[] = [
	{ title: 'Home', link: '/' },
	{ title: 'Scholarship Pools', link: '/scholarship-pool' },
	// { title: "Teacher's Portal", link: '/teacher-portal' },
	{ title: 'Scholar’s Progress', link: '/progress' },
	// { title: "Donors' Portal", link: '/donors-portal' },
]

const Navbar = () => {
	const [open, setOpen] = React.useState<boolean>(false)

	const router = useRouter()

	return (
		<>
			<nav className='nav'>
				<div className='nav__items flex-between'>
					<Link href='https://directed.dev/'>
						<div className='nav__logo-box'>
							<Image
								id='logo'
								src='/static/images/logo.png'
								width={50}
								height={50}
								alt='Direct Ed Logo'
							/>
							<div>
								<p>DirectEd Development</p>
								<p>Realising Potential</p>
							</div>
						</div>
					</Link>

					<ul className='nav__list-items'>
						{NavLinks.map((link: LinksType, index: number) => (
							<Link href={link.link} passHref key={index}>
								<li
									className={` ${
										router.pathname === link.link ? 'active' : ''
									}`}
								>
									{link.title}
								</li>
							</Link>
						))}
						{/* <div className='dropdown dropdown-hover'>
							<label tabIndex={0}>
								<Link
									href={'/transactions'}
									style={{ pointerEvents: 'none' }}
									passHref
								>
									<li
										className={`text-base text-white ${
											router.pathname === '/transactions'
												? 'font-semibold border-b-2'
												: 'font-light'
										}`}
									>
										Transactions
									</li>
								</Link>
							</label>
							<div
								tabIndex={0}
								className='dropdown-content card card-compact w-60 p-2 shadow bg-white mt-1'
							>
								<div className='card-body'>
									<h3 className='text-lg font-semibold'>
										The transaction page will be available after a donation has
										been made
									</h3>
								</div>
							</div>
						</div> */}
					</ul>

					<div>
						<ConnectWallet />
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
