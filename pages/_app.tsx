import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components'
import { MeshProvider } from '@meshsdk/react'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MeshProvider>
			<DefaultSeo {...SEO} />
			<div className='min-h-screen flex flex-col'>
				<Layout>
					<div className='flex-grow'>
						<Component {...pageProps} />
					</div>
				</Layout>
			</div>
		</MeshProvider>
	)
}

export default MyApp
