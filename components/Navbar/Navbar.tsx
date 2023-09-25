import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Button from '../Button/Button'

type LinksType = {
	title: string
	link: string
}




interface MobileMenuProps {
  links: LinksType[];
}



const NavLinks: LinksType[] = [
	{ title: 'Why DirectEd?', link: '/' },
	{ title: 'Scholarship Crowdfunding', link: '/scholarship-pool' },
	{ title: "Donor's Portal", link: '/donors-portal/nft-gallery' },
	{ title: 'About Us', link: 'https://www.notion.so/directed/About-Us-1be24f1a03ca4c1298dfb9ed20007d2a'}
]

const MobileMenu: React.FC<MobileMenuProps> = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const router = useRouter();

  return (
    <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileNav">
      <div className="mobile-menu__header">
        <Link href="https://directed.dev/">
          <div className="nav__logo-box">
            <Image
              id="logo"
              src="/static/images/logoside.png"
              width={190}
              height={50}
              alt="Direct Ed Logo"
            />

          </div>
        </Link>
		<div className='don-buttons'>
		
			<Button
			size='small'
			
		>
				<Link
			href='/directed-donate'
			>	Donate
			</Link>
		</Button>
	
        <button className="mobile-menu__toggle" onClick={toggleMenu}>
			
          <span className="hamburger-icon">

		  </span>
        </button>
		</div>

      </div>
      <ul className={`mobile-menu__list-items ${menuOpen ? '' : 'closed'}`}>
        {links.map((link: LinksType, index: number) => (
          <Link href={link.link} passHref key={index}>
            <li
              className={`${
                router.pathname === link.link ? 'active' : ''
              }`}
              onClick={toggleMenu}
            >
              {link.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

const DesktopNav: React.FC<MobileMenuProps> = ({ links }) => {
	  const router = useRouter();

  return (
	<div className='nav__items flex-between' id="desktopNav">

		<Link href='https://directed.dev/'>
			<div className='nav__logo-box'>
				<Image
					id='logo'
					src='/static/images/logoside.png'
					width={190}
					height={50}
					alt='Direct Ed Logo'
				/>
				
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
			<li>
			<Button
			size='small'
			>
				<Link
			href='/directed-donate'
			>	Donate
			</Link>
		</Button>
			</li>
		</ul>
	
	</div>
);
}


const Navbar = () => {

	const router = useRouter()

	return (
	
			<nav className='nav'>
				<div className="nav__logo-box">
				<DesktopNav links={NavLinks} />
				<MobileMenu links={NavLinks} />
				</div>

			</nav>
		
	)
}

export default Navbar
