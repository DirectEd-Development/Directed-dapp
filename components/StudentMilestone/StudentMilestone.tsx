import Image from 'next/image'
import MilestoneProgressBar from '../MilestoneProgressBar/MilestoneProgressBar'

type StudentMilestoneProps = {
	first_name: string
	last_name: string
	pseudonym: string
	milestone: number
}

const StudentMilestone = ({
	first_name,
	last_name,
	pseudonym,
	milestone,
}: StudentMilestoneProps) => {
	return (
		<div className='student-milestone'>
			<div className='student-milestone__info'>
				<div className='flex-gap-two'>
					<div className='student-milestone__abbr'>
						<span>{first_name.charAt(0) + last_name.charAt(0)}</span>
					</div>
					<p>{pseudonym}</p>
				</div>
				<MilestoneProgressBar
					milestoneNumber={
							milestone
					}
				 />
			</div>
		</div>
	)
}

export default StudentMilestone
