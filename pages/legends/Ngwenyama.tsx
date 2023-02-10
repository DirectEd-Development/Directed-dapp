import { NextPage } from 'next'
import Head from 'next/head'

const stories: NextPage = () => {
	return (
		<>
			<Head>
				<title>{'Student Stories'}</title>
			</Head>
			<main className='container grid grid-cols-1 gap-10 py-8  justify-items-center'>
				<div className='max-w-sm rounded overflow-hidden shadow-lg'>
					<div className='px-6 py-4 justify-items-center'>
						<div className='font-bold text-xl mb-2'>The Wits of Ngwenyama </div>
						<p className='text-gray-700 text-base'>
							'There once lived a fearsome cat called Paka power. His fur was
							darker than the darkest night known to all. His eyes were always
							bloodshot and his boiling anger was thought to overflow from his
							sharp ears. The cat was known to slaughter herds of buffalos using
							his lightning speed and overwhelming strength. He bullied
							elephants and rhinos who were helpless against him. He filled
							graveyards at will with the lives of innocent hyenas till they
							were no more. At the prime of his tyrannical reign arose ambition
							in a young lion, Ngwenyama, the Lion Kingdom heir. Saddened by the
							blood and tears shed by his loyal subjects, he challenged Paka
							Power to a duel by the watering hole under the full moon in the
							presence of all animals. Armed with nothing but his wits and lion
							strength, he was ready. At last! The fight began. Paka power
							terrorized Ngwenyama with his powerful punches and merciless
							kicks. Ngwenyama was no match with powerful Paka Power, and was
							left lying on the ground crying unto his dead ancestors for help .
							Paka power took this mighty moment to blow his own trumpet saying
							how he commanded all oceans. When Paka power turned his back,
							Ngwenyama had the perfect counter attack . He slashed open Paka
							powers belly and pulled out his intestines. He pulled out his
							throat using his long canines, Paka’s body lay lifeless on the
							ground as the crowd shouted in celebration. Ngwenyama let out an
							awesome roar to seal his position as the new king of the jungle.
							Long live the king!'{' '}
						</p>
					</div>
				</div>
			</main>
		</>
	)
}

export default stories
