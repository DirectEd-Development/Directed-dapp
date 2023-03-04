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
			<main className='teachers-portal'>
				<div className='flex-between'>
					<SchoolBio
						name='Kagumo High School'
						image='/static/images/kagumo-school.png'
						studentsAmount={62}
					/>
					<CircularProgressBar />
				</div>
				<div className='flex-between teachers-portal__filter'>
					<h3 className='text-black font-bold'>Active Student List: </h3>
					<div>
						<FilterOptions />
					</div>
				</div>
				<div className='bg-light2 p-6 teachers-portal__student-info'>
					<StudentProgressCard progress={20} />
					<StudentProgressCard progress={30} />
					<StudentProgressCard progress={50} />
					<StudentProgressCard progress={90} />
					<StudentProgressCard progress={60} />
					<StudentProgressCard progress={70} />
				</div>
			</main>
		</>
	)
}

export default TeacherPortal
