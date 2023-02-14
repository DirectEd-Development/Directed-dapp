import React from 'react'

type BadgeType = {
	active?: boolean
	children?: React.ReactNode
}

const Badge = ({ active, children }: BadgeType) => {
	return (
		<div
			className={`py-2 px text-white text-xl rounded-md
    ${active ? 'bg-primary' : 'bg-gray-400'}`}
		>
			{children}
		</div>
	)
}

export default Badge
