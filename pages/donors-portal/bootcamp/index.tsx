import { DonorLayout, StudentMilestone } from '../../../components'

type Props = {}

const Bootcamp = (props: Props) => {
	return (
		<DonorLayout>

		<main className='bootcamp-section'>
			<h2>DirectEd Access Bootcamp</h2>
			<section>
				<h3>Access the DirectEd Bootcamp Course</h3>
				<div className='bootcamp-section__info'>
					<div className='bootcamp-section__details'>
						<p>To learn or access our complete bootcamp material and courses along side our students follow the link <a href="https://lu-se.zoom.us/j/66085258419">Here</a></p>
					</div>
				</div>
			</section>
		</main>
		</DonorLayout>

	)
}

export default Bootcamp
