import React from 'react'

type DropdownProps = {
	title: string | React.ReactNode
	children: React.ReactNode
}

const Dropdown = ({ title, children }: DropdownProps) => {
	return (
		<div className='dropdown'>
			<div className='dropdown__button'>{title}</div>
			<div className='dropdown__content'>{children}</div>
		</div>
	)
}

export default Dropdown
