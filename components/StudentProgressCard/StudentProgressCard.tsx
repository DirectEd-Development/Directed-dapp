import React from 'react'
import Image from 'next/image'
import Badge from '../Badge/Badge'

type Props = {}

const StudentProgressCard = (props: Props) => {
	return (
		<div className='border-light border-b-4'>
			<input type='checkbox' name='' id='' />
			<Image src='/static/images/person1.png' alt='' width='100' height='100' />
			<div>
				<h3>Scott Johnson</h3>
				<p>s.johnson@directed.com</p>
			</div>
			<Badge active={true}>Eligibility Token</Badge>
			<Badge>Milestone Token</Badge>
		</div>
	)
}

export default StudentProgressCard
