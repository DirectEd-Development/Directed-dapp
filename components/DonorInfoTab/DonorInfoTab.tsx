import Image from 'next/image'

const DonorInfoTab = () => {
	return (
		<div className='donor-info__info'>
			<div className='flex-between donor-info__info-badges'>
				<div>
					<h4 className='donor-info__info-title'>
						What Can I Receive as a Donor?
					</h4>
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
											All donors will recieve a token to unlock the Scholar’s
											Progress Page.
										</span>
									</div>
								</div>
							</div>
							<p className=''>Access Token</p>
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
											All donations over $x will receive an exclusive,
											ai-generated digital art piece, which will serve as a
											token to unlock the Scholar’s Progress Page.
										</span>
									</div>
								</div>
							</div>
							<p>Digital Art</p>
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
											All Donations over $x will be inivted to an Annual Donor’s
											Dinner in Oxford.
										</span>
									</div>
								</div>
							</div>
							<p>Donors' Dinner</p>
						</div>
					</div>
				</div>
				<div className='donor-info__naming-badge'>
					<h5>Naming Rights</h5>
					<div className='flex-gap'>
						<Image
							src='/static/images/rights.png'
							alt='image'
							width='90'
							height='90'
						/>
						<div className='donor-info__info-badge'>
							<p>
								The donor naming rights for a given scholarship cohort can be
								purchased for $3,000
							</p>

							<div className='donor-info__info-cta'>
								<Image
									src='/static/images/Hover.png'
									alt='image'
									width='25'
									height='25'
								/>

								<div className='donor-info__pop-up'>
									<div className='flex-gap'>
										<Image
											src='/static/images/Hover.png'
											alt='image'
											width='35'
											height='35'
										/>
										<h5>What is a naming Right?</h5>
									</div>
									<span>
										A donor may associate his/her or an organization’s name with
										a scholarship in perpetuity by contributing at the minimum
										level established by the Foundation.
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DonorInfoTab
