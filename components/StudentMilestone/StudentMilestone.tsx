import Image from 'next/image'
import MilestoneProgressBar from '../MilestoneProgressBar/MilestoneProgressBar'
import {
	BiChevronDown,
	CiTwitter,
	CiLinkedin,
	MdLocationOn,
	BiChevronUp,
} from 'react-icons/all'
import Link from 'next/link'
import { useState } from 'react'

type StudentMilestoneProps = {}

const StudentMilestone = ({}: StudentMilestoneProps) => {
	const [showDetails, setShowDetails] = useState<boolean>(false)

	return (
		<div className='student-milestone'>
			<div className='student-milestone__info'>
				<div className='flex-gap-two'>
					<Image
						src='/static/images/avatar.png'
						alt='student'
						width={50}
						height={50}
						className='student-milestone__image'
					/>
					<p>Akinyi Zawadi</p>
				</div>
				<MilestoneProgressBar />
				<div
					className='flex-gap student-milestone__toggle'
					onClick={() => setShowDetails(!showDetails)}
				>
					<p>More</p>
					{showDetails ? (
						<BiChevronUp size={25} />
					) : (
						<BiChevronDown size={25} />
					)}
				</div>
			</div>
			{showDetails && (
				<div className='student-milestone__details'>
					<div className='flex-gap'>
						<MdLocationOn size={20} />
						<span>Nairobi, Kenya</span>
					</div>
					<p>
						I'm a web developer with in-depth experience in UI/UX design. In a
						nutshell, I create websites that help organizations address business
						challenges and meet their needs. I manage everything from website
						navigation and layout to a company's web hosting and security
						architecture.
					</p>
					<div className='flex-between'>
						<Link href='https://{userid}.github.io/{reponame}'>
							https://userid.github.io/reponame
						</Link>
						<div className='flex-gap'>
							<CiTwitter size={30} />
							<CiLinkedin size={30} />
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default StudentMilestone
