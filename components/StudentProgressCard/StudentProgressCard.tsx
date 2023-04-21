import Image from 'next/image'
import Badge from '../Badge/Badge'
import MilestoneBar from '../MilestoneBar/MilestoneBar'

type StudentProgressCardProps = {
	name: string
	email: string
	school: string
	gender: string
	pseudonym: string
	personal_id: string
	cohort: string
	phone_number: string
	cardano_wallet: string
	atala_prism_did: string
	milestones_achieved: number
	pschool_token: string
	pAcceptance_token: string
	grant_received: number
	total_grant: number
}

const StudentProgressCard = ({ ...student }: StudentProgressCardProps) => {
	const getMilestonePercentage = (
		eligibleToken: string,
		milestoneToken: string,
		milestone: number
	): number => {
		let progress = 0

		progress = eligibleToken ? 25 : 0
		if (milestoneToken) {
			progress += 25
		}

		if (milestone) {
			const milestoneProgress = milestone * 10
			progress += milestoneProgress
		}

		return progress
	}

	const getStudentInitials = (student: string) => {
		const name = student.split(' ')

		return name[0].charAt(0) + name[1].charAt(0)
	}

	return (
		<div className='student-progresscard flex-between'>
			<div className='flex-gap'>
				<input type='checkbox' name='' id='' />
				{/* {student.image ? (
					<Image
						src='/static/images/person1.png'
						alt='student'
						width='100'
						height='100'
					/>
				) : ( */}
				<div className='student-progresscard__image-placeholder'>
					<span>{getStudentInitials(student.name)}</span>
				</div>
				{/* )} */}

				<div>
					<h4>{student.name}</h4>
					<p>{student.email}</p>
				</div>
			</div>
			<div></div>
			<MilestoneBar
				progress={getMilestonePercentage(
					student.pAcceptance_token,
					student.pschool_token,
					student.milestones_achieved
				)}
			/>

			<div className='flex-gap'>
				<Badge active={true}>Eligibility Token</Badge>
				<Badge>Milestone Token</Badge>
			</div>
		</div>
	)
}

export default StudentProgressCard
