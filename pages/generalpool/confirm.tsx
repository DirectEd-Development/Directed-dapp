import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { Button } from '../../components'
import { sleep } from '../../utils'

const data: any = {
	'Owner’s address': 'addr93d9wek0wewjewas34asd3er4refsdfdsf',
	'Script hash': 'drewrfe4323423432432434sdasdds',
	'ADA donated': '500',
	'Token received': 'asset4303asd',
	'Total fees': '0.1634',
}

const Confirm: NextPage = () => {
	const [loading, setLoading] = React.useState<boolean>(false)
	const router = useRouter()

	const handleConfirm = async () => {
		setLoading(true)
		await sleep(2000).then(() => {
			setLoading(false)
			router.push('/?from=donation')
		})
	}

	return (
		<>
			<Head>
				<title>Donation Details</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='confirm-donation container'>
				<div className='confirm-donation__container'>
					<h2>Donation Details</h2>

					<ul className='confirm-donation__items'>
						{Object.keys(data).map((dt: string) => (
							<li className='confirm-donation__list'>
								<span>{dt}</span>
								<span>{data[dt]}</span>
							</li>
						))}
						<li className='confirm-donation__list'>
							<span className='w-1/4 flex items-center space-x-2'>
								<span>Deadline</span> <AiOutlineQuestionCircle />
							</span>
							<span>12/30/24</span>
						</li>
					</ul>
					<Button
						onClick={handleConfirm}
						loading={loading}
						loadingIndicator='processing...'
						variant='primary'
					>
						Done
					</Button>
				</div>
			</main>
		</>
	)
}

export default Confirm
