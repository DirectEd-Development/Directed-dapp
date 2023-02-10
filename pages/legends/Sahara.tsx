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
						<div className='font-bold text-xl mb-2'>The Hero of Namib</div>
						<p className='text-gray-700 text-base'>
							Sahara lived as an outcast in the Namib kingdom, he lived a lonely
							life due to lack of mates. He wandered all-round the kingdom
							looking for food and mates. The Namib kingdom was ruled by an
							egocentric leader, Scar, who ruled the kingdom as a dictator. His
							rule was highly detested by the lion of the kingdom. There was a
							need for a hero who would take upon himself and save the kingdom.
							Lions from all round the kingdom complained for a long time about
							Scar but could do nothing since he was strong and fierce. Some
							heroic lions tried to fight Scar and save the kingdom but were
							mercilessly torn apart. Cries of Namib lions were finally heard,
							Sahara decided to challenge Scar and give Namib lions freedom from
							Scar’s slavery. Sahara asked for a challenge with Scar, where all
							lions of Namib were to attend and see who would win. On the day of
							the challenge, Scar immensely bragged of how strong he was and how
							he would defeat and kill Sahara for challenging him. However,
							Sahara beat Scar mercilessly to injure him and weaken him by
							breaking his bones. All the lions of Namib were amazed by the
							strength of Sahara. Sahara was crowned the king of Namib and the
							general of Namib. Sahara fought for Namib whenever trouble or
							enemies challenged the peace and tranquility of Namib.{' '}
						</p>
					</div>
				</div>
			</main>
		</>
	)
}

export default stories
