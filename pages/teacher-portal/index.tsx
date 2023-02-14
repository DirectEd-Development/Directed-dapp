import { NextPage } from 'next'
import Head from 'next/head'

import {
	CircularProgressBar,
	FilterOptions,
	SchoolBio,
	StudentProgressCard,
} from '../../components'

const TeacherPortal: NextPage = () => {
	return (
		<>
			<Head>
				<title>Teacher's Portal</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='container pt-20 pb-8'>
				<div className='flex items-center justify-between'>
					<SchoolBio
						name='Kagumo High School'
						image='/static/images/kagumo-school.png'
						studentsAmount={62}
					/>
					<CircularProgressBar />
				</div>
				<div className='flex items-center justify-between mt-16'>
					<h3 className='text-black font-bold'>Active Student List: </h3>
					<div>
						<FilterOptions />
					</div>
				</div>
				<div className='flex items-center justify-between mt-16 bg-light2 p-6 rounded-lg'>
					<StudentProgressCard />
				</div>
			</main>
		</>
	)
}

export default TeacherPortal
