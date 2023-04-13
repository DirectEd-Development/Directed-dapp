type Props = {}

const MilestoneProgressBar = (props: Props) => {
	return (
		<div className='milestone-progressbar'>
			<div className='milestone-progressbar__milestone'></div>
			<div className='milestone-progressbar__milestone'></div>
			<div className='milestone-progressbar__milestone'></div>
			<div className='milestone-progressbar__milestone'></div>
			<div className='milestone-progressbar__progress'></div>
		</div>
	)
}

export default MilestoneProgressBar
