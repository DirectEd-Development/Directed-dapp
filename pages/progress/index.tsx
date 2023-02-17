import { NextPage } from 'next'
import { Meta, SchoolCard } from '../../components'

const Progress: NextPage = () => {
	return (
		<>
			<Meta title='Scholars’ Progress' description='Scholars progress page' />
			<main className='container py-8'>
				<div className='w-full'>
					<h1 className='text-5xl text-black font-semibold text-center'>
						Scholars’ Progress
					</h1>
					<h4 className='text-2xl text-black mt-8 mb-4'>
						Progress Track for St. Peters High School
					</h4>
					<div className='bg-light2 w-full rounded-md flex flex-col divide-y-2 divide-light'>
						<div className='flex items-center justify-around text-lg text-dark2 p-2'>
							<h1>Name</h1>
							<h1 className='md:ml-16'>Milestone Progress</h1>
							<h1>Contact</h1>
						</div>
						<SchoolCard progress={3} />
						<SchoolCard progress={2} />
						<SchoolCard progress={1} />
						<SchoolCard progress={2} />
					</div>
				</div>
			</main>
		</>
	)
}

export default Progress
