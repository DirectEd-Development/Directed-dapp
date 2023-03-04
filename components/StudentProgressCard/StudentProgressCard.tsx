import Image from 'next/image'
import Badge from '../Badge/Badge'
import MilestoneBar from '../MilestoneBar/MilestoneBar'

type StudentProgressCardProps = {
	progress: number
}

const StudentProgressCard = ({ progress }: StudentProgressCardProps) => {
	return (
		<div className='student-progresscard flex-between'>
			<div className='flex-gap'>
				<input type='checkbox' name='' id='' />
				<Image
					src='/static/images/person1.png'
					alt=''
					width='100'
					height='100'
				/>
				<div>
					<h3>Scott Johnson</h3>
					<p>s.johnson@directed.com</p>
				</div>
			</div>
			<MilestoneBar progress={progress} />

			<div className='flex-gap'>
				<Badge active={true}>Eligibility Token</Badge>
				<Badge>Milestone Token</Badge>
			</div>
		</div>
	)
}

export default StudentProgressCard
