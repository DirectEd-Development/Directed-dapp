import { DonorLayout, StudentMilestone } from '../../../components'

type Props = {}

const ScholarProgress = (props: Props) => {
	return (
		<DonorLayout>

		<main className='scholar-progress'>
			<h2>Scholars' Progress</h2>
			<section>
				<h3>Progress Track for St. Peters High School</h3>
				<div className='scholar-progress__student-list'>
					<div className='scholar-progress__student-list--head'>
						<p>Name</p>
						<p>Milestone Progress</p>
						<p>Contact</p>
					</div>
					<StudentMilestone />
				</div>
			</section>
		</main>
		</DonorLayout>

	)
}

export default ScholarProgress
