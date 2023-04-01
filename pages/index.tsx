import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../components'

const Home: NextPage = () => {
	return (
		<main className='home'>
			<section className='home__hero'>
				<div className='home__hero--text-content'>
					<h2>Direct Donations For Education and Development </h2>

					<p>
						For a world in which any person can realise their full potential,
						regardless of their draw in the lottery of life.
					</p>

					<div>
						<Link href='/directed-donate'>
							<Button variant='primary' size='small'>
								SUPPORT THE NEXT BILL GATES
							</Button>
						</Link>
					</div>
				</div>
				<Image
					src='/static/images/video-placeholder.png'
					alt='video placeholder'
					width='450'
					height={300}
					className='home__hero--video-content'
				/>
			</section>

			<section className='home__statement'>
				<Image
					src='/static/images/question.png'
					alt='question image'
					width={600}
					height={600}
				/>
				<div className='home__statement--text-content'>
					<h2>Problems</h2>
					<div className='flex-gap'>
						<Image
							src='/static/images/employee.png'
							alt='classroom'
							height={70}
							width={70}
						/>
						<h4>
							A shortage of software engineers, globally and within Africa
						</h4>
					</div>
					<div className='flex-gap'>
						<Image
							src='/static/images/classroom.png'
							alt='classroom'
							height={70}
							width={70}
						/>
						<h4>
							Even the brightest young Africans lack the resources and quality
							training to seize this opportunity
						</h4>
					</div>

					<Button variant='bordered-outline'>Learn More</Button>
				</div>
			</section>
			<section className='home__solutions'>
				<h1>Our Solutions</h1>
				<p className='home__solutions--paragraph'>
					Free coding courses, bootcamps and internships for high-potential
					under-resourced students in Africa, preparing them for careers as
					remote software engineers.
				</p>
				{/* <div>
					<Button variant='accent' size='small'>
						FIND THE NEXT STEVE JOBS
					</Button>
				</div> */}

				<h3>Why Us Over Other Charities?</h3>
				<div>
					<div className='home__solutions--items'>
						<Image
							src='/static/images/grad-cap.png'
							alt='graduation cap'
							width={100}
							height={100}
						/>
						<h5>Economic Sustainability</h5>
						<p>
							The vast majority of charities fail to be economically
							sustainable: they rely fully on donations and grants to sustain
							their operations. Our programme is designed to create a
							self-perpetuating cycle of funding for future scholars.
						</p>
						<Button variant='accent' noShadow>
							Read More
						</Button>
					</div>
					<div className='home__solutions--items'>
						<Image
							src='/static/images/building.png'
							alt='building'
							width={100}
							height={100}
						/>
						<h5>Meaningful Transparency</h5>
						<p>
							In legacy charities, stakeholders cannot independently verify
							where their funds have gone or why, leading to leakages and misuse
							of funds. We use blockchain-based payments, smart contracts and
							decentralised identifiers to solve the transparency while giving
							donors meaningful and continuous feedback on the difference they
							are making through our “Progress page”.
						</p>
						<Button variant='accent' noShadow>
							Read More
						</Button>
					</div>
					<div className='home__solutions--items'>
						<Image
							src='/static/images/money.png'
							alt='money'
							width={100}
							height={100}
						/>
						<h5>Cost-effectiveness</h5>
						<p>
							Few charities have developed low-cost programmes that successfully
							bring about transformative impact through economic growth. We have
							cost efficiency as a number-one priority and have a data-driven
							approach to ensure continuous improvement.
						</p>
						<Button variant='accent' noShadow>
							Read More
						</Button>
					</div>
				</div>

				{/* <div>
					<h5>FIND THE NEXT STEVE JOBS</h5>
					<Button variant='accent' size='small'>
						Donate Now
					</Button>
				</div> */}
			</section>
			<section className='home__steps'>
				<h2>The Details</h2>

				<div className='home__step'>
					<article>
						We partner with top-performing high schools in Kenya and Ethiopia,
						and onboard to infrastructure solutions that allow them to issue
						Verifiable Credentials.
					</article>
					<article>
						We offer a 1-week long mobile-phone-based Introductory Course in
						Python based on open-source material from Harvard University.
					</article>
					<img
						src='/static/images/arrow-1.png'
						alt='arrow one'
						className='home__arrows home__arrows--1'
					/>
					<img
						src='/static/images/arrow-2.png'
						alt='arrow two'
						className='home__arrows home__arrows--2'
					/>
				</div>
				<div className='home__step alternate'>
					<article>
						Top performers of the Introductory Course are given Scholarships to
						attend the 12-week DirectEd Bootcamp.
					</article>
					<article>
						For each partner school, we set up one Access Scholarship pool in
						order to raise funds to support students from low-income families
						through the bootcamp.
					</article>
					<img
						src='/static/images/arrow-3.png'
						alt='arrow three'
						className='home__arrows home__arrows--3'
					/>
					<img
						src='/static/images/arrow-4.png'
						alt='arrow four'
						className='home__arrows home__arrows--4'
					/>
				</div>
				<div className='home__step'>
					<article>
						Graduates of the DirectEd Bootcamp join the Graduate Programme;
						either joining our study-internship program, or an external elite
						coding bootcamp.
					</article>
					<article>
						As successful scholars find employment, the alumni group of the
						partner high school will ask them to contribute to the next cohort
						of students.
					</article>
					<img
						src='/static/images/arrow-5.png'
						alt='arrow five'
						className='home__arrows home__arrows--5'
					/>
				</div>
				<div className='home__steps--cta'>
				<Link href='/directed-donate'>
					<Button variant='primary' size='small'>
						TEACH A STUDENT HOW TO FISH
					</Button>
				</Link>
				</div>
			</section>
			<section className='home__chart'>
				<h3>How will the scholarship pool money be used?</h3>
				<Image
					src='/static/images/piechart.png'
					alt='piechart'
					width='1000'
					height='450'
					className='home__piechart'
				/>
			</section>
			<section className='home__impact'>
				<h3>How big a difference will this have?</h3>
				<h4>For every $1 donated, more than $30 of economic value created*</h4>
				<h4>
					This places us amongst the <strong>most effective charities</strong>{' '}
					in the world in regard to poverty alleviation and economic development
				</h4>
				<h4>
					"The World Bank, United Nations and all development banks should drop
					the nonsense they are doing and support DirectEd." - Professor John
					Smith, University of Oxford
				</h4>

				<Link href='/directed-donate'>
					<Button variant='primary'>Donate Now</Button>
				</Link>
			</section>
			<section className='home__brands'>
				<p>Sponsored By</p>
				<div className='flex-gap-two'>
					<Image
						src='/static/images/coti-white.png'
						alt='brand'
						width={150}
						height={50}
					/>
					<Image
						src='/static/images/yali-africa.png'
						alt='brand'
						width={120}
						height={80}
					/>
					<Image
						src='/static/images/tally.png'
						alt='brand'
						width={80}
						height={80}
					/>
					<Image
						src='/static/images/snapbrillia.png'
						alt='brand'
						width={150}
						height={60}
					/>
				</div>
			</section>
		</main>
	)
}

export default Home
