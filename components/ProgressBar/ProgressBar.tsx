import WalletBalance from '../WalletBalance/WalletBalance'

type ProgressBarProps = {}

const ProgressBar = () => {
	return (
		<div className='progress-bar'>
			<div className='progress-bar__funds'>
				<span> <WalletBalance /> </span>
				
			</div>
			<div className='progress-bar__milestone-bar'>
				<div
					className='progress-bar__milestone-progress'
					style={{ width: '5%' }}
				></div>
			</div>
			<p>₳300 to the next scholarship</p>
		</div>
	)
}

export default ProgressBar
