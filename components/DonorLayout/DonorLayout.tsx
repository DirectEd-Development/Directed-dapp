import React from 'react'
import Link from 'next/link'
import Layout from '../Layout/Layout'
import {AiOutlineRight} from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import { 
	NFTGalleryIcon,
	ScholarProgressIcon,
	EventsIcon,
	BootcampIcon,
	MoneyInIcon,
	MoneyOutIcon

} from '../../icons'


type LayoutProps = {
	children: React.ReactNode
}
type LinkProps = {
	name: string
	link: string
}
const LINKS: Array<LinkProps> = [
	{
		name: 'NFT Gallery',
		link: '/donors-portal/nft-gallery',
	},
	{
		name: 'Scholars\' Progress',
		link: '/progress',
	},
	{
		name: 'Events',
		link: '/donors-portal/events',
	},
	{
		name: 'DirectEd Bootcamp',
		link: '/donors-portal/bootcamp',
	},
	{
		name: 'Money In',
		link: '/donors-portal/moneyin',
	},
	{
		name: 'Money Out',
		link: '/donors-portal/moneyout',
	},
]


const DonorLayout = ({ children }: LayoutProps) => {
	const path = usePathname()
	return (
		<Layout>
			<div className='donors__content'>
				<div className='donors__nav'>

					{
						LINKS.map((link, index) => (
							<Link
							style={
								{
									backgroundColor: path === link.link ? '#6B8065':'transparent',
									color: path === link.link ?  '#fff':'#000',
								}
							}
							 href={link.link} key={index} className='link-container'>
								
								<div className='link-container'>
									{link.name === 'NFT Gallery' && <NFTGalleryIcon />}
									{link.name === 'Scholars\' Progress' && <ScholarProgressIcon/>}
									{link.name === 'Events' && <EventsIcon/>}
									{link.name === 'DirectEd Bootcamp' && <BootcampIcon />}
									{link.name === 'Money In' && <MoneyInIcon />}
									{link.name === 'Money Out' && <MoneyOutIcon />}
								
								<p>
									{link.name}
								</p>
								</div>
								
									<AiOutlineRight
										className='donors__link-icon'
										size={10}
										color={path === link.link ?  '#fff':'#000'}
									 />
								
							</Link>
						))
					}


					
				</div>
				<div className='donors__children'>{children}</div>
			</div>
		</Layout>
	)
}

export default DonorLayout
