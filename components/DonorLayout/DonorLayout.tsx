import React from 'react'
import Link from 'next/link'
import Layout from '../Layout/Layout'
type LayoutProps = {
	children: React.ReactNode
}

const DonorLayout = ({ children }: LayoutProps) => {
	return (
		<Layout>
			<div className='donors__content'>
				<div className='donors__nav'>
					<div className='donors__nav-elements'>
						<div className='donors__nav-element'>
							<Link href='/donors-portal/nft-gallery'>NFT Gallery</Link>
						</div>
						<div className='donors__nav-element'>
							<Link href='/progress'>Scholars' Progress</Link>
						</div>
						<div className='donors__nav-element'>
							<Link href='/donors-portal/events'>Events</Link>
						</div>
						<div className='donors__nav-element'>
							<Link href='/donors-portal/bootcamp'>DirectEd Bootcamp</Link>
						</div>
					</div>
				</div>
				<div className='donors__children'>{children}</div>
			</div>
		</Layout>
	)
}

export default DonorLayout
