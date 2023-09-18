import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Button from '../Button/Button'
import ConnectWallet from '../ConnectWallet/ConnectWallet'

type LinksType = {
	title: string
	link: string
}

const NavLinks: LinksType[] = [
	{ title: 'Why DirectEd?', link: '/' },
	{ title: 'Scholarship Crowdfunding', link: '/scholarship-pool' },
	{ title: "Donor's Portal", link: '/donors-portal/nft-gallery' },
	{ title: 'About Us', link: 'https://www.notion.so/directed/About-Us-1be24f1a03ca4c1298dfb9ed20007d2a' }
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
								src='/static/images/logoside.png'
								width={190}
								height={50}
								alt='Direct Ed Logo'
							/>
							{/* <div className='nav__logo-text'>
								<p>DirectEd Development</p>
								<p>Foundation</p>
							</div> */}
						</div>
					</Link>

					<ul className='nav__list-items'>
						{NavLinks.map((link: LinksType, index: number) => (
							<Link href={link.link} passHref key={index}>
								<li
									className={` ${router.pathname === link.link ? 'active' : ''
										}`}
								>
									{link.title}
								</li>
							</Link>
						))}
					</ul>
					<div className="nav__wallet flex">
						<a
							href="https://docs.cardano.org/cardano-testnet/tools/faucet/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Get Test ADA
						</a>
						<ConnectWallet />
					</div>


				</div>
			</nav>
		</>
	)
}

export default Navbar
