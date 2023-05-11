import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { Layout } from '../../components'

import {
	CircularProgressBar,
	FilterOptions,
	SchoolBio,
	StudentProgressCard,
} from '../../components'

import { GetStudents, Student } from '../../types/student'

const TeacherPortal: NextPage<{ studentData: Student[] }> = ({
	studentData,
}) => {
	if (!Array.isArray(studentData)) {
		return <div>Error: studentData is not an array.</div>
	}

	return (
		<Layout>
			<Head>
				a<title>Teacher's Portal</title>
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
				<div className='teachers-portal__filter'>
					<h4>Active Student List: </h4>
					<div>
						<FilterOptions data={studentData} initialSortKey='name'>
							{(sortedData) => (
								<div className='teachers-portal__student-info'>
									{sortedData
										.filter(
											(student) => student.school === 'Boy School Example 1'
										)
										.map((student) => (
											<StudentProgressCard
												key={student.personal_id}
												{...student}
											/>
										))}
								</div>
							)}
						</FilterOptions>
					</div>
				</div>
			</main>
		</Layout>
	)
}

export default TeacherPortal

export const getStaticProps: GetStaticProps = async (context) => {
	const res = await fetch(
		'http://directed-dev.us-east-1.elasticbeanstalk.com/students'
	)

	const studentData: GetStudents = await res.json()

	return {
		props: { studentData },
	}
}
