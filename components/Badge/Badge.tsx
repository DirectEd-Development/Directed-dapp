import React from 'react'

type BadgeType = {
	active?: boolean
	children?: React.ReactNode
}

const Badge = ({ active, children }: BadgeType) => {
	return (
		<div
			className={`badge
    ${active ? 'badge__active' : ''}`}
		>
			{children}
		</div>
	)
}

export default Badge
