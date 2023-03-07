type MilestoneBarProps = {
	progress: number
}

const MilestoneBar = ({ progress }: MilestoneBarProps) => {
	console.log(progress)

	return (
		<div className='milestone-bar flex-gap'>
			<div className='milestone-bar__milestones'>
				<div
					className='milestone-bar__milestones--bar'
					style={{ width: '80%' }}
				></div>
				<div className='milestone-bar__progress-level milestone-bar__progress-level--1'></div>
				<div className='milestone-bar__progress-level milestone-bar__progress-level--2'></div>
				<div className='milestone-bar__progress-level milestone-bar__progress-level--3'></div>
				<div className='milestone-bar__progress-level milestone-bar__progress-level--4'></div>
				<div className='milestone-bar__progress-level milestone-bar__progress-level--5'></div>
				<div className='milestone-bar__progress-level milestone-bar__progress-level--6'></div>
			</div>
			<div className='milestone-bar__text-content'>
				<div>
					<span>Minimum</span>
					<span>Threshold</span>
				</div>
				<div>
					<span>Intro</span>
					<span>Week</span>
				</div>
				<div>
					<div className='flex-gap-two'>
						<span>1</span>
						<span>2</span>
						<span>3</span>
						<span>4</span>
						<span>5</span>
					</div>
					<span>Sprint</span>
				</div>
			</div>
		</div>
	)
}

export default MilestoneBar
