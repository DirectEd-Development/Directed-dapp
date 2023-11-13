//imports
import React from 'react'
import Link from 'next/link'
import Button from '../../Button/Button'




const CreditC1 = () => {
	return (
        <>
        <p>
            You contribute to a Access Stipend pool where funds will be pooled
            to enable a talented student from a low-income family background
            to take part in the DirectEd bootcamp by supporting them with:
        </p>
        <ul className='tier-card__items'>
            <li>Rental computer</li>
            <li>WiFi or mobile data</li>
            <li>Tutorial vouchers</li>
            <li>Pocket money for living expenses</li>
        </ul>
        <h5>We show our appreciation in the following ways:</h5>
        <ul className='tier-card__items'>
            <li>
                Invitation to exclusive online and in-person DirectEd Lions
                events
            </li>
            <li>
                Access to the Student's Progress page, enabling you to observe
                how <br /> funds are used and observe students' achievements.
            </li>
            <li>
                Direct access to the open-source code of projects built by
                students.
            </li>
        </ul>
        <Link
            target='_blank'
            href='https://pay.nmkr.io/?p=a151e45d5b5b4ac1a7fc7a8983338992&c=1'
        >
            <Button variant='primary'>Confirm Option</Button>
        </Link>
    </>

	)
}

export default CreditC1
