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
						<div className='font-bold text-xl mb-2'>The Legend of Theolas</div>
						<p className='text-gray-700 text-base'>
							In the hills and valleys of Sangoa, there lived a harmonious
							community, the Sangoan lions. They lived so peacefully under the
							rule of Kanyi, their just and selfless leader who served them with
							integrity. But this so-called peace was soon to be shaken by the
							abrupt emergence of the Kimba lions. The leader of the Kimba lions
							was none to be compared with; his tall masculine body as tall as a
							sycamore tree. His bulging muscles made him look outstanding among
							all the other Kimba lions. After conquering the Sangoans in a
							blood shed fight, he took full control of the Sangoan lions and
							the neighboring communities. The pride he had in his victory made
							him rule with an iron fist, but this was after torturing and
							killing Kanyi, their leader. Under the oppressive rule of Mufasa,
							the leader of the Kimba, the Sangoans sought refuge under an
							upcoming warrior, by the name Theolas. Theolas assembled all the
							skillful warriors and came up with a devious plan to overthrow and
							kill Mufasa. This was not an easy task due to the large number of
							guards at Mufasa's palace. However, Theolas and his group of
							warriors were able to overthrow Mufasa and his people, killing him
							and driving all the Kimba people out of the Sangoa village. After
							the victory of Theolas, he was crowned leader of the Sangoans and
							ruled them just as his father Kanyi did, just and selfless. The
							legend of Theolas still reigns among the Sangoans for the way he
							was able to rise above the rest when no one else could.{' '}
						</p>
					</div>
				</div>
			</main>
		</>
	)
}

export default stories
