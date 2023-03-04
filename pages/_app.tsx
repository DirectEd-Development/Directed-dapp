import '../styles/global.scss'
import type { AppProps } from 'next/app'
import { Layout } from '../components'
import { MeshProvider } from '@meshsdk/react'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import '@fontsource/poppins'

function MyApp({ Component, pageProps }: AppProps) {
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
