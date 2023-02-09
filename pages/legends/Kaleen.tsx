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
						<div className='font-bold text-xl mb-2'>Kaleen of Toktok</div>
						<p className='text-gray-700 text-base'>
							This is the story of Kaleen. She came from the pride of Toktok.
							Due to the fact that the pride was full of elites the bar was set
							high and she had to work hard so as to meet the expectations. Soon
							she was the immediate subordinate of the pride king. However,
							Kaleen came to see the true colors of the king. The king was a mad
							greedy tyrant whose insatiable hunger for power and control
							eventually took its toll on the pride. It was when those effects
							became visible that Kaleen decided to take matters to her own
							paws. She tried to plead with the king but that led to further
							realizing that the pride no longer had a king but in place a
							monster. Even after stating the facts that other lions were dying
							in bloody wars due to unstable thirst for power and the pride was
							stricken with hunger and last but not least all the surrounding
							prides hating them. Kaleen saw that this could no longer go on she
							decided to overthrow the mad king. One fateful night she ensured
							that the king's guard had gone for their leave. She challenged him
							to a duel but only later realized she was greatly disadvantaged.
							However what she couldn't match in strength and raw power she
							countered with speed, intellect and agility. It was a fierce
							battle but good prevailed. The pride welcomed her as the new queen
							and banished the former king. At once Kaleen put her paws to
							restoring pride, honor and respect. She also made sure that the
							pride number increased and that war was a last result of settling
							disputes. Her stories are told and are to always be told to act
							with the wisdom of Kaleen.{' '}
						</p>
					</div>
				</div>
			</main>
		</>
	)
}

export default stories
