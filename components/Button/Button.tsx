import React from 'react'

type ButtonType = {
	children?: React.ReactNode
	loading?: boolean
	className?: string
	onClick?(event?: React.MouseEvent): void
	loadingIndicator?: string | React.ReactNode
}

const Button = ({
	onClick,
	children,
	loading,
	className,
	loadingIndicator,
}: ButtonType) => {
	return (
		<button
			onClick={onClick}
			className={`btn capitalize ${loading && 'loading'} ${className}`}
		>
			{loading ? <>{loadingIndicator}</> : <>{children}</>}
		</button>
	)
}

export default Button
