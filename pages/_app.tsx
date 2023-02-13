import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer, Navbar } from '../components'
import { MeshProvider } from '@meshsdk/react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MeshProvider>
			<Head>
				<title>Direct Ed - Scholarship Pools</title>
				<link rel='shortcut icon' href='/favicon.png' type='image/x-icon' />
			</Head>
			<div className='min-h-screen flex flex-col'>
				<Navbar />
				<div className='flex-grow'>
					<Component {...pageProps} />
				</div>
				<Footer />
			</div>
		</MeshProvider>
	)
}

export default MyApp
