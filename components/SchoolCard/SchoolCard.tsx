import Image from 'next/image'
import { MdLocationOn, MdOutlineMail } from 'react-icons/md'
import { RiErrorWarningLine } from 'react-icons/ri'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
import {fetchAndCountStudents} from '../../pages/api/students'
// import 'chart.js-plugin-labels-dv'
import Link from 'next/link'
import { useEffect, useState } from 'react'

ChartJS.register(ArcElement, Tooltip, Legend)

type SchoolCardProps = {
	schoolname: string
	location?: string
	desc: string
}

const SchoolCard = ({ schoolname, location, desc }: SchoolCardProps) => {
	const [milestones, setMilestones] = useState<number[] | null>([]);
	
	  //  usage
	  const url = 'http://directed.us-east-1.elasticbeanstalk.com/students/'; // Replace with the actual URL of the student data
	 
	useEffect(()=>{
		fetchAndCountStudents(url, schoolname)
		.then((milestoneCounts) =>{
			setMilestones(milestoneCounts)
			console.log('Milestone counts:', milestoneCounts)
		})
		.catch((error) => console.error('Error:', error));

	}, [])


	const data = {
		datasets: [
			{
				data: milestones,
				backgroundColor: [
					'#395241',
					'#6b8065',
					'#374756',
					'#020202',
					'#797979',
				],
				borderColor: ['#395241', '#6b8065', '#374756', '#020202', '#797979'],
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
		if (schoolname === "Ngong Road Children's Foundation") {
			return '/static/images/ngong.jpg'
		} else if (schoolname === 'Kagumo High School') {
			return '/static/images/djed-scholars.jpg'
		} else if (schoolname === "Mang'u High School") {
			return '/static/images/mangu.jpg'
		} else if (schoolname === 'Maryhill Girls High School') {
			return '/static/images/mary-hill.jpg'
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
								<p>1: Personal Website Project</p>
							</div>
							<div className='school-card__topic flex-gap'>
								<span></span>
								<p>2: Group Project part I</p>
							</div>
							<div className='school-card__topic flex-gap'>
								<span></span>
								<p>3: Group Project Part II</p>
							</div>
							<div className='school-card__topic flex-gap'>
								<span></span>
								<p>4: Group Project Part III</p>
							</div>
							<div className='school-card__topic flex-gap'>
								<span></span>
								<p>5: Individual Capstone Project</p>
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
