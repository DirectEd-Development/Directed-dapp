import { DonorLayout, StudentMilestone } from '../../../components'

type Props = {}

const Bootcamp = (props: Props) => {
	return (
		<DonorLayout>

		<main className='bootcamp-section'>
			<section>
				<h3>Access the DirectEd Bootcamp Course</h3>
				<div className='bootcamp-section__info'>
					<div className='bootcamp-section__details'>
						<p>To access the DirectEd Bootcamp content, send an email to <a href="mailto:edu@directed.dev">edu@directed.dev</a> to be added to all study materials, then follow the link <a href="mailto:edu@directed.dev">Here</a></p>
					</div>
				</div>
			</section>
		</main>
		</DonorLayout>

	)
}

export default Bootcamp
