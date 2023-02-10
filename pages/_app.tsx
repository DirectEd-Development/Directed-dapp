import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer, Navbar } from '../components'
import { MeshProvider, useWalletList } from '@meshsdk/react'
import usePersistedState from '../hooks/usePersistedState'

function MyApp({ Component, pageProps }: AppProps) {
	// console.log('what')
	// const wallets = useWalletList()
	// console.log(wallets)

	// const [wallet, setWallet] = usePersistedState<null | object>('wallet', null)

	return (
		<MeshProvider>
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
