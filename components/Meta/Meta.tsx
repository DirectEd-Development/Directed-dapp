import { NextSeo } from 'next-seo'
import Head from 'next/head'

type MetaProps = {
	title: string
	description: string
}

const Meta = ({ title, description }: MetaProps) => {
	return (
		<>
			<NextSeo title={`Direct Ed - ${title}`} description={description} />
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
			</Head>
		</>
	)
}

export default Meta
