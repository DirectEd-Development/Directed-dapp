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
						<div className='font-bold text-xl mb-2'>Kazu The Great</div>
						<p className='text-gray-700 text-base'>
							Kazu. A name bestowed all glory for her heroic deeds. Abandoned
							and victimized during the great war, and still bears the scars of
							that war. Her nature encouraged her to be what she was, the
							greatest among her pride. After the great war, Kazu found herself
							among the orphaned cubs, and the elderly lions who were left to
							probe in pain of losing their loved ones. Through combined
							efforts, Kazu and the other lions worked towards building a new
							pride, a new empire that would command their share of respect. The
							pain of losing her husband and her children still made her feel
							the agony of not being able to help them. Peace prevailed in the
							society for a long time and they all enjoyed and cherished the
							harmony. Summer season was coming and the flowers bloomed. Marina
							the dreaded pride that rained terror on other small empires was
							advancing to other territories. Kazu knew well that despite the
							great war that rendered her kingdom powerless, Marina would still
							attack them. Kazu decided to avoid such a massacre that rendered
							their village a blood pool. Kazu set out to meet Lufi, Marinas
							leader, to have peace talks. She knew deep in her heart that she
							was putting her life on the death row but decided to look at the
							bigger picture Upon arriving at Marina, Kazu requested to speak to
							Lufi. Fear crippled but she decided to be brave. She spoke to Lufi
							and explained the importance of peaceful coexistence. Lufi called
							off the war and retrieved his troops from their territories.
							Returning back home, the villagers were proud of her for her
							heroic deed. She was indeed a heroine. She had brought an end to
							the great war.{' '}
						</p>
					</div>
				</div>
			</main>
		</>
	)
}

export default stories
