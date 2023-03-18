import Head from 'next/head'
import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

type LayoutProps = {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='layout'>
			<Head>
				<link rel='shortcut icon' href='/favicon.png' type='image/x-icon' />
			</Head>
			<Navbar />
			<>{children}</>
			<Footer />
		</div>
	)
}

export default Layout
