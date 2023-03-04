import React from 'react'

type BadgeType = {
	active?: boolean
	children?: React.ReactNode
}

const Badge = ({ active, children }: BadgeType) => {
	return (
		<div
			className={`badge text-xl
    ${active ? 'bg-primary badge__active' : 'bg-gray-400'}`}
		>
			{children}
		</div>
	)
}

export default Badge
