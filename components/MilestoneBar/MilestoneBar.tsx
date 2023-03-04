type MilestoneBarProps = {
	progress: number
}

const MilestoneBar = ({ progress }: MilestoneBarProps) => {
	console.log(progress)

	return (
		<div className='milestone-bar flex-gap'>
			<div className='milestone-bar__milestones bg-gray-200'>
				<div
					className='milestone-bar__milestones--bar bg-primary'
					style={{ width: `${progress}%` }}
				></div>
				<div className='milestone-bar__progress-level milestone-bar__progress-level--1 bg-light2'></div>
				<div className='milestone-bar__progress-level milestone-bar__progress-level--2 bg-light2'></div>
				<div className='milestone-bar__progress-level milestone-bar__progress-level--3 bg-light2'></div>
				<div className='milestone-bar__progress-level milestone-bar__progress-level--4 bg-light2'></div>
				<div className='milestone-bar__progress-level milestone-bar__progress-level--5 bg-light2'></div>
				<div className='milestone-bar__progress-level milestone-bar__progress-level--6 bg-light2'></div>
			</div>
			<div className='milestone-bar__text-content flex-between text-gray-500'>
				<div>
					<p>Minimum</p>
					<p>Threshold</p>
				</div>
				<div>
					<p>Intro</p>
					<p>Week</p>
				</div>
				<div>
					<div className='flex-gap'>
						<p>1</p>
						<p>2</p>
						<p>3</p>
						<p>4</p>
						<p>5</p>
					</div>
					<p className='text-center'>Sprint</p>
				</div>
			</div>
		</div>
	)
}

export default MilestoneBar
