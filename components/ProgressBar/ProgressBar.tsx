import { useEffect, useState } from 'react'
import { getWalletBalance } from '../Blockfrost/Blockfrost'

type WalletBalanceProps = {
	balance: number
	stakeAddress: string
}


function WalletBalance({ balance, stakeAddress }: WalletBalanceProps) {
	const text =
		stakeAddress === "stake178c0hsmp3ya69aqvntdnanp2d3cqaj3kmlmjctalw8k5luq6strwv"
			? "Mang’u & Kagumo Total:"
			: stakeAddress === "stake179dedwdltct8y0cfak5x54aemazeay6lxfscee8qeer7esqfswem9"
				? "Maryhill x NRCF Total:"
				: "";
	return (
		<div>
			<p>
				<b>{text} ₳{balance}</b>
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

	const TOTAL_NEEDED = 10000

	useEffect(() => {
		const fetchBalance = async () => {
			const res = await getWalletBalance(stakeAddress)

			const amountInAda = Math.floor(parseInt(res.controlled_amount) / 1000000)
			const additionalAmount =
				stakeAddress ===
					'stake178c0hsmp3ya69aqvntdnanp2d3cqaj3kmlmjctalw8k5luq6strwv'
					? 7100
					: 0
			setBalance(amountInAda + additionalAmount)
			setAmountNeeded(
				Math.max(
					(Math.floor((amountInAda + additionalAmount) / 1000) + 1) * 1000 -
					(amountInAda + additionalAmount),
					0
				)
			)
		}

		fetchBalance()
	}, [])

	setTimeout(() => {
		getPercentage()
	}, 1000)

	const getPercentage = () => {
		// const totalAmount = balance + (amountNeeded !== null ? amountNeeded : 0)

		const percentage = (balance / TOTAL_NEEDED) * 100
		setProgressCount(percentage)
	}

	return (
		<div className='progress-bar'>
			<div className='progress-bar__funds'>
				<WalletBalance balance={balance} stakeAddress={stakeAddress} />
			</div>
			<div className='progress-bar__milestone-bar'>
				<div
					className='progress-bar__milestone-progress'
					style={{ width: `${progressCount}%` }}
				></div>
			</div>
			{amountNeeded !== null && (
				<p>{`₳${TOTAL_NEEDED} to get to pool total`}</p>
			)}
		</div>
	)
}

export default ProgressBar
