import Image from 'next/image'
import { MdLocationOn, MdOutlineMail } from 'react-icons/md'
import { RiErrorWarningLine } from 'react-icons/ri'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
// import 'chart.js-plugin-labels-dv'
import Link from 'next/link'

ChartJS.register(ArcElement, Tooltip, Legend)

type SchoolCardProps = {
	image: string
	schoolname?: string
	chart: string
	location?: string
	desc: string
}

const SchoolCard = ({
	image,
	schoolname,
	location,
	chart,
	desc,
}: SchoolCardProps) => {
	const data = {
		datasets: [
			{
				data: [12, 5, 32, 21, 16],
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

	return (
		<>
			<div className='school-card'>
				<h4>{schoolname}</h4>
				<p>{desc}</p>
				<div>
					<Image
						src={image}
						alt=''
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
					<Link href='/scholar-progress'>
						<div className='flex-gap'>
							<RiErrorWarningLine size={20} />
							<p>Learn more about the scholars</p>
						</div>
					</Link>
				</div>
			</div>
		</>
	)
}

export default SchoolCard
