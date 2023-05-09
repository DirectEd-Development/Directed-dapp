import React from 'react'
import Layout from '../Layout/Layout'
type LayoutProps = {
	children: React.ReactNode
}

const DonorLayout = ({ children }: LayoutProps) => {
	return (
        <Layout>
            <div className="donors__content">

            <div className="donors__nav">
                <div className="donors__nav-elements">
                    <div className="donors__nav-element">
                    <a href="/donors-portal/nft-gallery">NFT Gallery</a>
                    </div>
                    <div className="donors__nav-element">
                    <a href="/donors-portal/scholars-progress">Scholars' Progress</a>
                    </div>
                </div>
            </div>
            <div className="donors__children">
                {
                    children
                }

            </div>
            </div>

        </Layout>
		
	)
}

export default DonorLayout
