import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Meta , Layout} from '../components'

const Home: NextPage = () => {
	return (
		<Layout>
			<Meta
				title='DirectEd Homepage'
				description='For a world in which any person can realise their full potential,regardless of their draw in the lottery of life.'
			/>
			<main className='home'>
				<section className='home__hero'>
					<div className='home__hero--text-content'>
						<h2>Direct Donations For Education and Development</h2>
						<p>
							Building a world where every person can realise their full potential.
						</p>
						<div>
							<Link href='/directed-donate'>
								<Button variant='primary' size='small'>
									Donate
								</Button>
							</Link>
						</div>
					</div>
					<iframe
						src='https://www.youtube.com/embed/_dq9z-whX3Y'
						frameBorder='0'
						className='home__hero--video-content desk'
				
					
					></iframe>
					<img
					className='home__hero--video-content mob'
					 src="https://drive.google.com/uc?export=view&id=1EYBbSnCu3ChejOjhr3xNirjaqC7AHyMk" alt="DirectEd" />
				
				</section>
				<section className='home__quote'>
					<blockquote>
						“There is not a meeting that I go to today with any CEOs or senior
						executives of any organisation who's not looking for more software
						developers, more digital skills. That's the currency in every sector
						of the economy in every economy in the world."
					</blockquote>
					<span>- Satya Nadella, CEO and chairman of Microsoft</span>
				</section>
				<section className='home__statement'>
					<div className="main-img">
					<img
					className='main-img'
						src='https://drive.google.com/uc?export=view&id=1JXkfnQvM9OLUsYELIaWuCPgYQiTOa-QI'
						alt='Students'
					
					/>
					</div>
				
					<div className='home__statement--text-content'>
						<h2>Problem</h2>
						<div className='flex-gap'>
							<Image
								src='/static/images/employee.png'
								alt='classroom'
								height={70}
								width={70}
							/>
							<p>
								A shortage of software engineers, globally and within Africa
							</p>
						</div>
						<div className='flex-gap'>
							<Image
								src='/static/images/classroom.png'
								alt='classroom'
								height={70}
								width={70}
							/>
							<p>
								Even the brightest young Africans lack the resources and quality
								training to seize this opportunity
							</p>
						</div>
						<Link href='https://www.notion.so/DirectEd-Whitepaper-a1ead202d7964c80ba85bc0f206749cf'>
							<Button variant='primary'>Learn More</Button>
						</Link>
					</div>
				</section>
				<section className='home__why-us'>
					<h3>Solution</h3>
					<div>
						<div>
							<h4>Introductory Course</h4>
							<p>
								This is a 1-week long coding course introducing students to
								coding using Python. By adapting Harvard’s famous CS50
								Introduction to Computer Science to fit a mobile-only
								environment, we make this accessible to all students, regardless
								of socio-economic background.
							</p>
							<Link href='https://directed.notion.site/Programme-Curriculum-46430b7791354108b5f4c074ca536760'>
								<Button variant='link'>Read More</Button>
							</Link>
						</div>
						<div>
							<h4>Coding Bootcamp</h4>
							<p>
								Top students from the Introductory Course proceed to the Coding
								Bootcamp. This is an extremely demanding 12-week-long full-time
								coding bootcamp covering full-stack web development in the MERN
								framework and a wide range of soft skills through special expert
								workshops.
							</p>
							<Link href='https://directed.notion.site/Programme-Curriculum-46430b7791354108b5f4c074ca536760'>
								<Button variant='link'>Read More</Button>
							</Link>
						</div>
						<div>
							<h4>Internship and Specialisation</h4>
							<p>
								Coding Bootcamp graduates continue their training through a
								6-month internship with a partner tech firm. They work in teams
								of four with support from a working professional while
								specialising in a skill our research has revealed to have the
								highest employability potential.
							</p>
							<Link href='https://directed.notion.site/Programme-Curriculum-46430b7791354108b5f4c074ca536760'>
								<Button variant='link'>Read More</Button>
							</Link>
						</div>
					</div>
					<Link href='/directed-donate'>
						<Button variant='accent' size='small'>
							Sponsor a Student
						</Button>
					</Link>
				</section>
				<section className='home__steps'>
					<h3>Learner's journey</h3>
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
									We offer a 1-week long mobile-phone-based Introductory Course
									in Python based on open-source material from Harvard
									University.
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
								<h5>Access Scholarships</h5>
								<Image
									src='/static/images/Hover.png'
									alt='image'
									width='35'
									height='35'
								/>
							</div>
							<div className='home__step--content home__step--content-3'>
								<p>
									Top performers of the Introductory Course are given
									Scholarships to attend the 12-week DirectEd Bootcamp.
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
									<strong> Access Stipend</strong> pool in order to raise funds
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
									Graduates of the DirectEd Bootcamp join the Graduate
									Programme; either joining our study-internship program, or an
									external elite coding bootcamp.
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
									As successful scholars find employment, the alumni group of
									the partner high school will ask them to contribute to the
									next cohort of students.
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
								Support The Vision
							</Button>
						</Link>
					</div>
				</section>
				<section className='home__solutions'>
					<h3>Why us?</h3>
					<div>
						<div className='home__solutions--items'>
							<Image
								src='/static/images/grad-cap.png'
								alt='graduation cap'
								width={100}
								height={100}
							/>
							<div>
								<h5>Economic Sustainability</h5>
								<p>
									The vast majority of charities fail to be economically
									self-sustaining, relying on continuous donations and grants.
									Our <strong> Access Stipend</strong> pools are tied to
									specific high schools. This way, successful alumni are more
									likely to support the next generation of students as they
									would have a shared background.
								</p>
							</div>
							<Link href='https://directed.notion.site/DirectEd-Whitepaper-a1ead202d7964c80ba85bc0f206749cf'>
								<Button variant='accent' noShadow>
									Read More
								</Button>
							</Link>
						</div>
						<div className='home__solutions--items'>
							<Image
								src='/static/images/building.png'
								alt='building'
								width={100}
								height={100}
							/>
							<div>
								<h5>Transparency & Accountability</h5>
								<p>
									Legacy charity donors cannot independently verify where their
									funds went or how they were used. By using privacy-preserving
									decentralised identifiers and facilitating stipends using
									blockchain smart contracts that release funds conditional on
									reaching milestones, we achieve transparency by design and
									accountability.
								</p>
							</div>
							<Link href='https://directed.notion.site/DirectEd-Whitepaper-a1ead202d7964c80ba85bc0f206749cf'>
								<Button variant='accent' noShadow>
									Read More
								</Button>
							</Link>
						</div>
						<div className='home__solutions--items'>
							<Image
								src='/static/images/money.png'
								alt='money'
								width={100}
								height={100}
							/>
							<div>
								<h5>Cost-Effective Impact</h5>
								<p>
									Few charities successfully deliver cost-effectiveness
									transformative impact. We strive to achieve maximum impact per
									donated dollar by targeting a highly scalable cause area with
									extremely high impact potential. We also maintain an ethos of
									data-driven decision making and cost-effectiveness throughout
									our operations.
								</p>
							</div>
							<Link href='https://directed.notion.site/DirectEd-Whitepaper-a1ead202d7964c80ba85bc0f206749cf'>
								<Button variant='accent' noShadow>
									Read More
								</Button>
							</Link>
						</div>
					</div>
					<div>
						<Link href='/directed-donate'>
							<Button variant='accent' size='small'>
								Contribute to a scholarship pool
							</Button>
						</Link>
					</div>
				</section>
				<section className='home__chart'>
					<h3>Access stipends expenditure</h3>
					<img
						src='/static/images/piechart.svg'
						alt='piechart'
	
						className='home__piechart'
					/>
					<p>
						Learn more about the handling of donated funds
						<a href='https://docs.google.com/document/d/1hNUkd_nRpgZhilxuazm7BSH85XCm18NTmzlKYWTGGlA/edit'>
							{' '}
							here
						</a>
					</p>
				</section>
				<section className='home__impact'>
					<h3>What is the impact?</h3>
					<p>
						$1 donated → $66 estimated direct&nbsp;
						<Link href='https://directeddev.gitbook.io/lions-lite-paper/introduction'>
							<strong>economic value</strong>
						</Link>
						&nbsp;over their lifetime
					</p>
					<p>
						This makes us one of the most effective development projects
						in the world
					</p>
					<Link href='/directed-donate'>
						<Button variant='primary'>Donate Now</Button>
					</Link>
				</section>
				<section className='home__brands'>
					<h3>Partners</h3>
					<div className='flex-gap-two'>
						<Image
							src='/static/images/coti-white.png'
							alt='coti'
							width={150}
							height={50}
						/>
						<Image
							src='/static/images/tally.svg'
							alt='tally'
							width={100}
							height={100}
						/>
						<Image
							src='/static/images/snapbrillia.png'
							alt='snapbrillia'
							width={150}
							height={65}
						/>
						<Image
							src='/static/images/web3ug.png'
							alt='web3ug'
							width={80}
							height={80}
						/>
						<Image
							src='/static/images/cardano-warriors.png'
							alt='web3ug'
							width={100}
							height={80}
						/>
					</div>
				</section>
			</main>
		</Layout>
	)
}

export default Home
