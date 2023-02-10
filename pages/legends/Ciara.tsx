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
						<div className='font-bold text-xl mb-2'>The Rise of Ciara</div>
						<p className='text-gray-700 text-base'>
							Once upon a time, there lived a lioness, Ciara from the Akandawa
							Kingdom. She had soft golden fur that glittered in the sunset and
							shiny golden eyes. Her marvelous geit was enough to portray how
							powerful she was. Everyone from Akandawa recalls the story of
							Ciara, and how she rose to be the most powerful and fierce lioness
							in the land, a story that has been passed from one generation to
							the next. Ciara had been just but a normal lioness in the
							grasslands until one day when the Majitu clan of hyenas, led by
							Janja, attacked the Akandawa Kingdom. A severe famine had struck
							not only in the Akandawa Kingdom but all neighboring kingdoms,
							including that of Majitu. The Akandawa had luckily foreseen the
							devastating famine and stored a lot of food that would sustain
							them during the drought. The gluttonous Majitu saw this and was
							green with envy. They therefore posed frequent attacks on the
							Akandawa. Many warriors tried and failed to ward off the Majitu
							until one day when Ciara hatched a plan to deal with the Majitu
							once and for all. She put up traps where the food was stored and
							hung some meat near deadly cliffs. The Majitu, blinded by greed,
							approached the traps put up foolishly like the reprobates they
							were. Most of them died on account of their greed by falling into
							the cliffs while the ones trapped got severely punished and
							exiled. Peace and harmony returned to the kingdom of Akandawa. Due
							to the courage and might that Ciara showed, members of Akandawa
							Kingdom saw it best to crown her the queen, and their fierce
							lioness warrior. With her on the throne, all neighbors respected
							the Akandawa Kingdom and held frequent festivals that upheld peace
							in the Kingdom, even the remnants of Majitu.{' '}
						</p>
					</div>
				</div>
			</main>
		</>
	)
}

export default stories
