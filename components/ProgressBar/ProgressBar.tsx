type ProgressBarProps = {}

const ProgressBar = ({}: ProgressBarProps) => {
	return (
		<div className='progress-bar'>
			<div className='progress-bar__funds'>
				<span>₳3,108</span>
				<span>Goal: $40,000</span>
			</div>
			<div className='progress-bar__milestone-bar'>
				<div
					className='progress-bar__milestone-progress'
					style={{ width: '70%' }}
				></div>
			</div>
			<p>₳1000 to fund the next scholarship</p>
		</div>
	)
}

export default ProgressBar
