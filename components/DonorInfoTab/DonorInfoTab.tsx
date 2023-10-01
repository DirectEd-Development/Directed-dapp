import Image from 'next/image'
import { GiAbstract006 } from 'react-icons/gi'
import Link from 'next/link'
import Button from '../Button/Button'

const DonorInfoTab = () => {
	return (
		<div className='donor-info'>
			<div className='flex-between donor-info__info-badges'>
				<div>
					<div className='donor-info__badges'>
						<div>
							<div className='donor-info__info-badge'>
								<Image
									src='/static/images/acess.png'
									alt='image'
									width='90'
									height='90'
								/>
								<div className='donor-info__info-cta'>
									<Image
										src='/static/images/Hover.png'
										alt='image'
										width='50'
										height='50'
									/>
									<div className='donor-info__pop-up'>
										<Image
											src='/static/images/Hover.png'
											alt='image'
											width='35'
											height='35'
										/>
										<span>
											Donors get a transferrable access token to a portal where
											they can follow the students they supported on their
											journey
										</span>
									</div>
								</div>
							</div>
							<p>Donors portal</p>
						</div>
						<div>
							<div className='donor-info__info-badge'>
								<Image
									src='/static/images/digital.png'
									alt='image'
									width='90'
									height='90'
								/>

								<div className='donor-info__info-cta'>
									<Image
										src='/static/images/Hover.png'
										alt='image'
										width='50'
										height='50'
									/>

									<div className='donor-info__pop-up'>
										<Image
											src='/static/images/Hover.png'
											alt='image'
											width='35'
											height='35'
										/>
										<span>
											Supporters can get a unique piece of generative art
											co-created and developed with students at our partner high
											schools!
										</span>
									</div>
								</div>
							</div>
							<p>Lions Collection</p>
						</div>
						<div>
							<div className='donor-info__info-badge'>
								<Image
									src='/static/images/donor.png'
									alt='image'
									width='90'
									height='90'
								/>
								<div className='donor-info__info-cta'>
									<Image
										src='/static/images/Hover.png'
										alt='image'
										width='50'
										height='50'
									/>

									<div className='donor-info__pop-up'>
										<Image
											src='/static/images/Hover.png'
											alt='image'
											width='35'
											height='35'
										/>
										<span>
											Super-donors receive an exclusive invitation to attend a
											donor’s reception hosted at the University of Oxford.
										</span>
									</div>
								</div>
							</div>
							<Link href='https://x.com/directeddev/status/1678724347316391936?s=46&t=7qeW1p3kfSxYwiu1nrDAwQ'><p>Donor Reception</p></Link>
						</div>
						<div>
							<div className='donor-info__info-badge'>
								<Image
									src='/static/images/rights.png'
									alt='image'
									width='90'
									height='90'
								/>
								<div className='donor-info__info-cta'>
									<Image
										src='/static/images/Hover.png'
										alt='image'
										width='50'
										height='50'
									/>

									<div className='donor-info__pop-up'>
										<Image
											src='/static/images/Hover.png'
											alt='image'
											width='35'
											height='35'
										/>
										<span>
											Major benefactors will be recognised for their
											contribution to the Access Scholarship they are providing
											through name plates.
										</span>
									</div>
								</div>
							</div>
							<Link href='https://x.com/directeddev/status/1704442855735853548?s=46&t=7qeW1p3kfSxYwiu1nrDAwQ'><p>Donor plate</p></Link>
						</div>
						<div>
							<div className='donor-info__info-badge'>
								<GiAbstract006
									size={80}
									style={{
										color: '#374756',
									}}
								/>
								<div className='donor-info__info-cta'>
									<Image
										src='/static/images/Hover.png'
										alt='image'
										width='50'
										height='50'
									/>

									<div className='donor-info__pop-up'>
										<Image
											src='/static/images/Hover.png'
											alt='image'
											width='35'
											height='35'
										/>
										<span>
											Organisations that make substantial contributions receive
											the honor of naming an entire scholarship cohort.
										</span>
									</div>
								</div>
							</div>
							<p>Naming Rights</p>
						</div>
					</div>
				</div>
			</div>
			<Link
				href='https://directeddev.gitbook.io/lions-lite-paper/'
				className='donor-info__link'
			>
				<Button variant='link'>
					Read about the DirectEd Lions Art Collection
				</Button>
			</Link>
		</div>
	)
}

export default DonorInfoTab
