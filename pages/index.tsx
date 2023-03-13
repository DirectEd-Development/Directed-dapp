import React, { useState } from 'react'
import type { NextPage } from 'next'
import {
	Button,
	Modal,
	PoolCard,
	FilterMenu,
	Meta,
	DonorInfoTab,
} from '../components'
import { useRouter } from 'next/router'

import { hasCookie, setCookie } from 'cookies-next'
import Image from 'next/image'
import { schoolData } from '../styles/lib/schooldata'
import { SchoolDataType } from '../types/schoolDataType'

const Home: NextPage = () => {
	const [modal, setModal] = React.useState<
		'donate-done' | 'how-to-donate' | 'video' | ''
	>('')

	const router = useRouter()

	const handleDonationModal = () => {
		setModal('')
		router.push('/progress')
	}
	React.useEffect(() => {
		if (router.query && router.query.from === 'donation') {
			setModal('donate-done')
		}
	}, [router.query])

	React.useEffect(() => {
		if (!hasCookie('direct-ed-user')) {
			setModal('how-to-donate')
			setCookie('direct-ed-user', 'not a stranger', { maxAge: 60 * 60 * 24 })
		}
	}, [])

	return (
		<>
			<Meta title='Scholarship Pools' description='Scholarship Pools Page' />
			<main className='scholarship-pool container'>
				<h1 className='scholarship-pool__title'>Scholarship Pools</h1>
				<DonorInfoTab />
				<FilterMenu />

				{schoolData.map((school: SchoolDataType) => (
					<PoolCard key={school.title} {...school} />
				))}
			</main>
		</>
	)
}

export default Home
