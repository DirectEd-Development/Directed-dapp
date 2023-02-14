type ProgressType = {
	tokenLevel?: number
}

const CircularProgressBar = ({ tokenLevel }: ProgressType) => {
	return (
		<div
			className='circular-progress w-48 h-48 rounded-full flex justify-center items-center relative flex-col
      before:content-[""] before:absolute before:w-4/6 before:h-4/6 before:rounded-full before:bg-white'
			style={{ background: `conic-gradient(#395240 90deg, #C8C8C8 0deg)` }}
		>
			<span className='relative'>
				{tokenLevel ? tokenLevel : 0} token issued
			</span>
		</div>
	)
}

export default CircularProgressBar
