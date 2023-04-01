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

				<video
					controls
					poster='/static/images/video-placeholder.png'
					width='500'
					height='320'
					className='home__hero--video-content'
				>
					<source src='/static/videos/homepage-video.mp4' type='video/mp4' />
				</video>
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
			<section className='home__why-us'>
				<h2>Solution</h2>
				<h4>The Rocketship with 3 parts: broad base and pointy nose.</h4>
				<div>
					<div>
						<h5>Introductory Course</h5>
						<p>
							This is a 1-week long coding course introducing students to coding
							using Python. By adapting Harvard’s famous CS50 Introduction to
							Computer Science to fit a mobile-only environment, we make this
							accessible to all students, regardless of socio-economic
							background.
						</p>
						<Button variant='link'>Read More</Button>
					</div>
					<div>
						<h5>Coding Bootcamp</h5>
						<p>
							Top students proceed to a 12-week Coding Bootcamp covering full
							stack web development in the popular MERN Javascript framework. In
							addition, they are trained in a wide range of soft skills through
							workshops hosted by guest lecturers.
						</p>
						<Button variant='link'>Read More</Button>
					</div>
					<div>
						<h5>Internship and Specialisation</h5>
						<p>
							Graduates proceed to train with partner tech companies, getting
							real-world experience whilst simulatenously continue their
							learning by specialising in one of several in-demand skills as
							identified by our market research. This includes smart contract
							development, Power BI or SAP 4/HANA.
						</p>
						<Button variant='link'>Read More</Button>
					</div>
				</div>
				<Link href='/directed-donate'>
					<Button variant='accent' size='small'>
						UNLOCK THE POTENTIAL OF AFRICA’S NEXT STEVE JOBS
					</Button>
				</Link>
			</section>
			<section className='home__steps'>
				<h2>The Details</h2>

				<div className='home__step'>
					<article>
						<div className='flex-between'>
							<h5>Onboarding</h5>
							<Image
								src='/static/images/Hover.png'
								alt='image'
								width='35'
								height='35'
							/>
						</div>
						<div className='home__step--content home__step--content-1'>
							<p>
								We partner with top-performing high schools in Kenya and
								Ethiopia, and onboard to infrastructure solutions that allow
								them to issue Verifiable Credentials.
							</p>
						</div>
					</article>
					<article>
						<div className='flex-between'>
							<h5>Intro Course</h5>
							<Image
								src='/static/images/Hover.png'
								alt='image'
								width='35'
								height='35'
							/>
						</div>
						<div className='home__step--content home__step--content-2'>
							<p>
								We offer a 1-week long mobile-phone-based Introductory Course in
								Python based on open-source material from Harvard University.
							</p>
						</div>
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
						<div className='flex-between'>
							<h5>Access Stipend Pools</h5>
							<Image
								src='/static/images/Hover.png'
								alt='image'
								width='35'
								height='35'
							/>
						</div>
						<div className='home__step--content home__step--content-3'>
							<p>
								Top performers of the Introductory Course are given Scholarships
								to attend the 12-week DirectEd Bootcamp.
							</p>
						</div>
					</article>
					<article>
						<div className='flex-between'>
							<h5>Coding Bootcamp</h5>
							<Image
								src='/static/images/Hover.png'
								alt='image'
								width='35'
								height='35'
							/>
						</div>
						<div className='home__step--content home__step--content-4'>
							<p>
								For each partner school, we set up one
								<strong>Access Scholarship</strong> pool in order to raise funds
								to support students from low-income families through the
								bootcamp.
							</p>
						</div>
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
						<div className='flex-between'>
							<h5>Study-Internship</h5>
							<Image
								src='/static/images/Hover.png'
								alt='image'
								width='35'
								height='35'
							/>
						</div>
						<div className='home__step--content home__step--content-5'>
							<p>
								Graduates of the DirectEd Bootcamp join the Graduate Programme;
								either joining our study-internship program, or an external
								elite coding bootcamp.
							</p>
						</div>
					</article>
					<article>
						<div className='flex-between'>
							<h5>Recontribution!</h5>
							<Image
								src='/static/images/Hover.png'
								alt='image'
								width='35'
								height='35'
							/>
						</div>
						<div className='home__step--content home__step--content-6'>
							<p>
								As successful scholars find employment, the alumni group of the
								partner high school will ask them to contribute to the next
								cohort of students.
							</p>
						</div>
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
			<section className='home__solutions'>
				<h2>Why Us Over Other Charities?</h2>
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
				<div>
					<Link href='/directed-donate'>
						<Button variant='accent' size='small'>
							SPONSOR THE NEXT ELON MUSK
						</Button>
					</Link>
				</div>
			</section>
			<section className='home__chart'>
				<h3>How are Access Stipends Funds used?</h3>
				<Image
					src='/static/images/piechart.png'
					alt='piechart'
					width='1000'
					height='450'
					className='home__piechart'
				/>
			</section>
			<section className='home__impact'>
				<h3>What is the impact?</h3>
				<h4>
					$1 donated → $130 generated in economic value* over their lifetime
				</h4>
				<h4>
					making us one of the most effective development projects in the world
				</h4>
				<blockquote>
					“There is not a meeting that I go to today with any CEOs or senior
					executives of any organisation who’s not looking for more software
					developer, more digital skills. That’s the currency in every sector of
					the economy in every economy in the world." - Satya Nadella, CEO and
					chairman of Microsoft
				</blockquote>

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

			{/* <Link href='/directed-donate'>
				<Button variant='primary'>
					LEVEL THE PLAYING FIELD, A LITTLE BIT AT LEAST
				</Button>
			</Link> */}
		</main>
	)
}

export default Home
