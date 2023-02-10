import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const stories: NextPage = () => {
	return (
		<>
			<Head>
				<title>{'Student Stories'}</title>
			</Head>
			<main className='container grid grid-cols-1 gap-10 py-8  justify-items-center'>
				<div className='max-w-sm rounded overflow-hidden shadow-lg'>
					<div className='px-6 py-4 justify-items-center'>
						<div className='font-bold text-xl mb-2'>The Jumbo lion</div>
						<p className='text-gray-700 text-base'>
							This is the legendary story of the Jumbo Lion from the tropical
							savanna of Africa. This particular lion has stood against the odds
							and ends of the deadly dangers of the savannah. It leads a pride
							of fierce lions of which no other pride has conquered before. Its
							roar is mighty enough to cause the whole savannah to bow before it
							and cause a chill cold run through the spine of weaker animals.
							Having lived for sixteen years, Jumbo is an experienced hunter
							capable of devouring animals of prey such as gazelles, antelopes
							and thus catering for its diet needs as well as those of the rest
							of the pride. Its ability, bravery and supersonic speed are also
							some of its characteristics to which many people bestow a lot of
							honor. Its huge bulging muscles gives its body the necessary
							strength to kill any predator and thus giving it an upper hand in
							hunting For any member to join its pride, it has to demonstrate
							bravery by fighting and bringing down another huge animal. In
							addition, many lionesses join its pride by free will and volition
							thus further enhancing Jumbo’s power and domination over the
							jungle.{' '}
						</p>
					</div>
				</div>
			</main>
		</>
	)
}

export default stories
