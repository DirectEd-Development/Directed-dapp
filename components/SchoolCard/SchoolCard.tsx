import { useState } from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { GrLinkedinOption } from 'react-icons/gr'
import { TbBrandTelegram } from 'react-icons/tb'
import Image from 'next/image'
import Button from '../Button/Button'
import Link from 'next/link'
import { FaChevronRight, FaChevronDown } from 'react-icons/fa'
import ProgressBar from '../ProgressBar/ProgressBar'

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
			<div className='h-fit'>
				<div className='p-3 flex items-center md:px-10'>
					<div className='space-x-2 md:space-x-5 flex items-center  flex-grow'>
						<div className='avatar'>
							<div className='w-12 h-12 rounded-full'>
								<Image src={image} alt='' width='300' height='300' />
							</div>
						</div>
						<h1 className='md:text-xl font-semibold text-dark2'>{name}</h1>
					</div>
					<div className='flex justify-center flex-grow'>
						<ProgressBar progress={progress} />
					</div>
					<div className='flex justify-center flex-grow'>
						<Button
							onCick={() => setOpen(!open)}
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
						<p className='gap-2 flex items-center'>
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
						<div className='flex items-center justify-between'>
							<Link href={'#'}>
								<span className='truncate'>
									{'https://{userid}.github.io/{reponame}'}
								</span>
							</Link>
							<div className='flex items-center space-x-4'>
								<button className='text-white bg-[#2867B2] p-3 rounded-lg'>
									<GrLinkedinOption />
								</button>
								<button className='text-white bg-[#0088CC] p-3 rounded-lg'>
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
