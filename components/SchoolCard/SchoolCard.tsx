import { useState } from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { GrLinkedinOption } from 'react-icons/gr'
import { TbBrandTelegram } from 'react-icons/tb'
import Image from 'next/image'
import Button from '../Button/Button'
import Link from 'next/link'
import { FaChevronRight, FaChevronDown } from 'react-icons/fa'
import ProgressBar from '../StudentProgressBar/StudentProgressBar'

type SchoolCardProps = {
	image?: string
	name?: string
	progress?: number
	description?: string
}

const SchoolCard = ({
	image = '/static/images/avatar.png',
	name = 'John Doe',
	progress = 4,
	description = 'lorem ipsum',
}: SchoolCardProps) => {
	const [open, setOpen] = useState<boolean>(false)

	return (
		<>
			<div className='school-card'>
				<div className='school-card__top-content'>
					<div className='flex-gap-two'>
						<div className='school-card__image'>
							<Image src={image} alt='' width='300' height='300' />
						</div>

						<h1 className='md:text-xl font-semibold text-dark2'>{name}</h1>
					</div>
					<div className='school-card__content'>
						<ProgressBar progress={progress} />
					</div>
					<div className='school-card__content'>
						<Button
							onClick={() => setOpen(!open)}
							className='btn-ghost text-primary font-bold gap-2 hover:bg-transparent'
						>
							{open ? (
								<>
									<span>Close</span>
									<FaChevronDown />
								</>
							) : (
								<>
									<span>More</span>

									<FaChevronRight />
								</>
							)}
						</Button>
					</div>
				</div>
				<div
					className={`ease-in-out duration-300 ${
						open ? 'min-h-52 md:px-16' : ' h-0'
					}`}
				>
					<div
						className={open ? 'flex flex-col p-5 md:px-10 space-y-3' : 'hidden'}
					>
						<p className='flex-gap'>
							<IoLocationSharp />
							<span>Naivasha, Kenya</span>
						</p>
						<p>
							I'm a web developer with in-depth experience in UI/UX design. In a
							nutshell, I create websites that help organizations address
							business challenges and meet their needs. I manage everything from
							website navigation and layout to a company's web hosting and
							security architecture.
						</p>
						<div className='flex-between'>
							<Link href='#'>
								<span className='school-card__student-link'>
									{'https://{userid}.github.io/{reponame}'}
								</span>
							</Link>
							<div className='flex-gap'>
								<button className='school-card__icon-button'>
									<GrLinkedinOption />
								</button>
								<button className='school-card__icon-button'>
									<TbBrandTelegram />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default SchoolCard
