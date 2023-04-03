type ProgressBarProps = {}

const ProgressBar = ({}: ProgressBarProps) => {
	return (
		<div className='progress-bar'>
			<div className='progress-bar__funds'>
				<span>₳700</span>
			</div>
			<div className='progress-bar__milestone-bar'>
				<div
					className='progress-bar__milestone-progress'
					style={{ width: '70%' }}
				></div>
			</div>
			<p>₳300 to the next scholarship</p>
		</div>
	)
}

export default ProgressBar
