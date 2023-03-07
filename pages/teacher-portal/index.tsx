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
			<main className='teachers-portal container'>
				<div className='flex-between'>
					<SchoolBio
						name='Kagumo High School'
						image='/static/images/kagumo-school.png'
						studentsAmount={62}
					/>
					<CircularProgressBar />
				</div>
				<div className='flex-between teachers-portal__filter'>
					<h4>Active Student List: </h4>
					<div>
						<FilterOptions />
					</div>
				</div>
				<div className='teachers-portal__student-info'>
					<StudentProgressCard progress={20} />
				</div>
			</main>
		</>
	)
}

export default TeacherPortal
