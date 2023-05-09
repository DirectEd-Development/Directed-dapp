import React from 'react'
import Layout from '../Layout/Layout'
type LayoutProps = {
	children: React.ReactNode
}

const DonorLayout = ({ children }: LayoutProps) => {
	return (
        <Layout>
            <div className="donor-nav">
                <h2>Donor Nav</h2>
                <ul>
                    <li><a href="/donors-portal/nft-gallery">NFT Gallery</a></li>
                    <li><a href="/donors-portal/scholars-progress">Progress</a></li>
                </ul>
            </div>
            <>{children}</>
        </Layout>
		
	)
}

export default DonorLayout
