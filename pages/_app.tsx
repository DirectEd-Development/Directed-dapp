import '../styles/global.scss'
import type { AppProps } from 'next/app'
import { Layout } from '../components'
import { MeshProvider } from '@meshsdk/react'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import '@fontsource/poppins'
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		hotjar.initialize(3412386, 6)
	}, [])

	return (
		<MeshProvider>
			<DefaultSeo {...SEO} />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</MeshProvider>
	)
}

export default MyApp
