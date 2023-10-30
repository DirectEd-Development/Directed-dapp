import React from 'react'
import Link from 'next/link'
import Layout from '../Layout/Layout'
import {AiOutlineRight} from 'react-icons/ai'
import { usePathname } from 'next/navigation'

import { HomeIcon, ProgressIcon, EventsIcon, CampIcon, MoneyIn, MoneyOut } from './CustomIcons'; 


type LayoutProps = {
	children: React.ReactNode
}
type LinkProps = {
	name: string
	link: string
	icon: React.FC;
}
const LINKS: Array<LinkProps> = [
	{
		name: 'NFT Gallery',
		link: '/donors-portal/nft-gallery',
		icon: HomeIcon,
	},
	{
		name: 'Scholars\' Progress',
		link: '/progress',
		icon: ProgressIcon
	},
	{
		name: 'Events',
		link: '/donors-portal/events',
		icon: EventsIcon
	},
	{
		name: 'DirectEd Bootcamp',
		link: '/donors-portal/bootcamp',
		icon: CampIcon
	},
	{
		name: 'Money In',
		link: '/donors-portal/moneyin',
		icon: MoneyIn
	},
	{
		name: 'Money Out',
		link: '/donors-portal/moneyout',
		icon: MoneyOut
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
							 href={link.link} key={index}>						
								{<link.icon />} {/* Render the custom icon component */}							
								<p>									
									{link.name}
								</p>
								
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
