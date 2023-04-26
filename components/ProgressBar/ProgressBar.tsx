import { useEffect, useState } from 'react'
import { getWalletBalance } from '../Blockfrost/Blockfrost'

type WalletBalanceProps = {
	balance: number
}

function WalletBalance({ balance }: WalletBalanceProps) {
	return (
		<div>
			<p>
				<b>₳{balance}</b>
			</p>
		</div>
	)
}

type ProgressBarProps = {
	stakeAddress: string
}

const ProgressBar = ({ stakeAddress }: ProgressBarProps) => {
	const [balance, setBalance] = useState<number>(0)
	const [amountNeeded, setAmountNeeded] = useState<number | null>(null)
	const [progressCount, setProgressCount] = useState<number>(0)

	useEffect(() => {
		const fetchBalance = async () => {
			const res = await getWalletBalance(`${stakeAddress}`)

			const amountInAda = Math.floor(parseInt(res.controlled_amount) / 1000000)
			setBalance(amountInAda)
			setAmountNeeded(
				Math.max((Math.floor(amountInAda / 1000) + 1) * 1000 - amountInAda, 0)
			)
		}
		fetchBalance()
		getPercentage()
	}, [])

	const getPercentage = () => {
		const totalAmount = balance + (amountNeeded !== null ? amountNeeded : 0)

		const percentage = (balance / totalAmount) * 100
		setProgressCount(percentage)

		// console.log(totalAmount)
		// console.log(percentage)
	}

	return (
		<div className='progress-bar'>
			<div className='progress-bar__funds'>
				<WalletBalance balance={balance} />
			</div>
			<div className='progress-bar__milestone-bar'>
				<div
					className='progress-bar__milestone-progress'
					style={{ width: `${progressCount}%` }}
				></div>
			</div>
			{amountNeeded !== null && (
				<p>{`₳${amountNeeded} to the next scholarship`}</p>
			)}
		</div>
	)
}

export default ProgressBar
