import { NextPage } from 'next'
import { Meta } from '../../components'

const Transactions: NextPage = () => {
	return (
		<>
			<Meta title='Transactions' description='Trancsactions page' />
			<main className='container grid grid-cols-1 md:grid-cols-2 gap-10 py-8  justify-items-center'>
				<div className='col-span-2'>
					<h1 className='text-5xl text-black font-semibold text-center'>
						Transactions
					</h1>
				</div>
			</main>
		</>
	)
}

export default Transactions
