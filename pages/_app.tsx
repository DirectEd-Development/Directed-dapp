import '../styles/global.scss'
import type { AppProps } from 'next/app'
import { Layout } from '../components'
import { MeshProvider } from '@meshsdk/react'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import '@fontsource/poppins'
import { hotjar } from 'react-hotjar'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '../hooks/redux/store'

type Breakpoint = 'lg'

function MyApp({ Component, pageProps }: AppProps) {
	const [breakpoint, setBreakpoint] = useState<Breakpoint>('lg')

	const getBreakpoint = (width: number) => {
		if (width > 1200) {
			return 'lg'
		}
	}

	const handleResize = () => {
		const width = window.innerWidth
		const newBreakpoint: any = getBreakpoint(width)
		setBreakpoint(newBreakpoint)
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		hotjar.initialize(3412386, 6)
	}, [])

	return (
		<Provider store={store}>
			<MeshProvider>
				<DefaultSeo {...SEO} />
					{breakpoint === 'lg' ? (
						<Component {...pageProps} />
					) : (
						<Component {...pageProps} />

						// <Layout>
						// <h3 style={{ textAlign: 'center', padding: '10rem' }}>
						// 	The mobile version of the donation portal is under development,
						// 	please visit this page on your computer.
						// </h3>
						// </Layout>
					)}
			</MeshProvider>
		</Provider>
	)
}

export default MyApp
