import Image from 'next/image'
import MilestoneProgressBar from '../MilestoneProgressBar/MilestoneProgressBar'
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai'

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
	const imageStyle = {
		borderRadius: '50%',
		border: '1px solid #fff',
	  }
	return (
	
		<div className='student-milestone'>
			{/*HEAD, all items in the gead to be siplayed inline. */}
			<div className="student_milestone__head">
				
				<div className="student-milestone__image">
				<Image
						src={'https://drive.google.com/uc?id=1963abLb1o1rbjVX-LaifIkOE4ax0tmoN'}
						alt='student'
						width={50}
						height={50}
						style={imageStyle}
						/>
				</div>
				<div className="student-milestone__name">
					<p>{pseudonym}</p>
				</div>
				<MilestoneProgressBar
					milestoneNumber={
							milestone
					}
				 />

				 <div className="student-milestone__view">
					<p>view more</p>
					{
						//To be displayed conditionaly on whether accordion is displayed or not
						//<AiOutlineDown size={20} />
						//<AiOutlineUp size={20} />
					}
				 </div>
			
			</div>
			{/*BODY, should only be visible when the accordion is open*/}
			<div className="student-milestone__body">
				{/*Location and contents to be flex row with contents taking like 70%*/ }

				<div className="student-milestone__location">
					<p>Naivasha Kenya</p>
				</div>
				<div className="student-milestone__contents">
					<div className="student-milestone__icons">
						{/*Icons to be displayed inline*/}

					</div>
					<div className="student-milestone-description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quidem labore nesciunt dolorem? Cumque, expedita delectus dolore ex dolor numquam, illo laudantium, est ad facilis accusantium excepturi non earum? Placeat.
					</div>
				</div>
			</div>
			</div>
	)
}

export default StudentMilestone
