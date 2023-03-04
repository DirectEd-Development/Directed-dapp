type ProgressType = {
	tokenLevel?: number
}

const CircularProgressBar = ({ tokenLevel }: ProgressType) => {
	return (
		<div className='circular-progress'>
			<span className='circular-progress__caption'>
				{tokenLevel ? tokenLevel : 0} token issued
			</span>
		</div>
	)
}

export default CircularProgressBar
