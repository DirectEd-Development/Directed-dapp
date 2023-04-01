import '../styles/global.scss'
import type { AppProps } from 'next/app'
import { Layout } from '../components'
import { MeshProvider } from '@meshsdk/react'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import '@fontsource/poppins'
import { hotjar } from 'react-hotjar'
import {Provider} from "react-redux";
import {store, persistor} from "../hooks/redux/store"
import { PersistGate } from 'redux-persist/integration/react';

import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		hotjar.initialize(3412386, 6)
	}, [])

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<MeshProvider>
					<DefaultSeo {...SEO} />
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</MeshProvider>
			</PersistGate>
		</Provider>
	)
}

export default MyApp
