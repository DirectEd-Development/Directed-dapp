import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { DonorLayout, StudentMilestone } from '../../../components'
import { useRouter } from 'next/router'
import { getLink } from '../../../utils/getLink'

const StudentProgess: NextPage = ({ students }: any) => {
	const router = useRouter()
	const schoolSlug = router.query.id

	const schoolName = students.filter(
		(student: any) => getLink(student.school) === schoolSlug
	)

	return (
		<DonorLayout>
			<main className='scholar-progress'>
				<section>
					<h3>Progress Track for {schoolName[0].school}</h3>
					<div className='scholar-progress__student-list'>
						<div className='scholar-progress__student-list--head'>
							<p>Name</p>
							<p>Milestone Progress</p>
							<p>Contact</p>
						</div>
						{students
							.filter((student: any) => getLink(student.school) === schoolSlug)
							.map((student: any) => (
								<StudentMilestone
									first_name={student.first_name}
									last_name={student.last_name}
									pseudonym={student.pseudonym}
									key={student.pseudonym}
								/>
							))}
					</div>
				</section>
			</main>
		</DonorLayout>
	)
}

export default StudentProgess

export const getStaticPaths = async () => {
	const res = await fetch(
		'http://directed.us-east-1.elasticbeanstalk.com/schools/'
	)

	const schools = await res.json()

	const paths = schools.map((school: any) => {
		return {
			params: {
				id: getLink(school.name),
			},
		}
	})

	return {
		paths: [...paths],
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(
		'http://directed.us-east-1.elasticbeanstalk.com/students/'
	)

	const students = await res.json()
	return {
		props: {
			students,
		},
	}
}
