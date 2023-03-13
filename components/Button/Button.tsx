type ButtonType = {
	children?: React.ReactNode
	loading?: boolean
	onClick?(event?: React.MouseEvent): void
	loadingIndicator?: string | React.ReactNode
	variant?: string
	size?: string
	disabled?: boolean
}

const Button = ({
	onClick,
	children,
	loading,
	loadingIndicator,
	variant,
	size,
	disabled,
}: ButtonType) => {
	return (
		<button
			onClick={onClick}
			className={`btn 
								${loading} 
								${variant}
								${size}
								${disabled && 'disabled'}
			`}
			disabled={disabled}
		>
			{loading ? <>{loadingIndicator}</> : <>{children}</>}
		</button>
	)
}

export default Button
