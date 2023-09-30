import Image from 'next/image'
import { MdLocationOn, MdOutlineMail } from 'react-icons/md'
import { RiErrorWarningLine } from 'react-icons/ri'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
import {fetchAndCountStudents} from '../../pages/api/students'
// import 'chart.js-plugin-labels-dv'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'

ChartJS.register(ArcElement, Tooltip, Legend)

type SchoolCardProps = {
	schoolname: string
	location?: string
	desc: string
}

const SchoolCard = ({ schoolname, location, desc }: SchoolCardProps) => {
	const [milestones, setMilestones] = useState<number[]>([100,0,0,0,0,0]);
	
	  //  usage
	  const url = 'http://directed.us-east-1.elasticbeanstalk.com/students/'; 
	 
	useEffect(()=>{
		axios.post('/api/milestones', {
			school: schoolname
		})
		.then((res)=>{
			console.log("milestones", res.data.milestones)
			setMilestones(res.data.milestones)
		}
		)
		.catch((err)=>{
			console.log(err)
		}
		)

	}, [])


	const data = {
		datasets: [
			{
				data: milestones,
				backgroundColor: [
					'#808080','#717171', '#6b8065', '#395241', '#374756', '#003300'
				],
				borderColor: ['#808080', '#717171', '#6b8065', '#395241', '#374756', '#003300'],
				
			},
		],
	}

	const options = {}

	const pageLink = schoolname
		.split(' ')
		.join('-')
		.toLowerCase()
		.split("'")
		.join('')

	const addImage = (name: string) => {
		if (schoolname === "General Pool") {
			return '/static/images/ngong.jpg'
		} else if (schoolname === "Girls Pool") {
			return '/static/images/djed-scholars.jpg'
		} else if (schoolname === "Boys Pool") {
			return '/static/images/mangu.jpg'
		} 
	}

	return (
		<Link href={`/donors-portal/${pageLink}`}>
		<div className='school-card'>
				<h4>{schoolname}</h4>
				<div className='school-card__desc'>
					<p>{desc}</p>
				</div>
				<div>
					<Image
						src={addImage(schoolname) || '/static/images/peters.png'}
						alt={schoolname}
						width='450'
						height='250'
						className='school-card__image'
					/>
					<div>
						<div className='flex-gap'>
							<MdLocationOn size={20} />
							<p>{location}</p>
						</div>
						<div className='flex-gap'>
							<MdOutlineMail size={20} />
							<p>Thank You Letter</p>
						</div>
					</div>
					<div className='school-card__content'>
						<div className='school-card__chart'>
							<Doughnut
								data={data}
								options={options}
								// plugins={[textCenter]}
							></Doughnut>
						</div>
						<div className='school-card__topics'>
						<div className='school-card__topic flex-gap'>
								<span></span>
								<p> No milestone achieved</p>
							</div>
							<div className='school-card__topic flex-gap'>
								<span></span>
								<p> Personal Website Project</p>
							</div>
							<div className='school-card__topic flex-gap'>
								<span></span>
								<p> Group Project part I</p>
							</div>
							<div className='school-card__topic flex-gap'>
								<span></span>
								<p> Group Project Part II</p>
							</div>
							<div className='school-card__topic flex-gap'>
								<span></span>
								<p> Group Project Part III</p>
							</div>
							<div className='school-card__topic flex-gap'>
								<span></span>
								<p>Individual Capstone Project</p>
							</div>
						</div>
					</div>
						<div className='flex-gap'>
							<RiErrorWarningLine size={20} />
							<p>Learn more about the scholars</p>
						</div>
				</div>
			</div>
			</Link>
	)
}

export default SchoolCard
