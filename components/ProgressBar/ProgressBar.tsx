import { useEffect, useState } from 'react'

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
  heroesSold: number
  royalsSold: number
}

const ProgressBar = ({ heroesSold, royalsSold }: ProgressBarProps) => {
  const [balance, setBalance] = useState<number>(0)
  const [amountNeeded, setAmountNeeded] = useState<number | null>(null)
  const [progressCount, setProgressCount] = useState<number>(0)

  const TOTAL_NEEDED = 10000
  const kagumo = (heroesSold * 995) + (royalsSold * 1995)

  useEffect(() => {
    setBalance(kagumo)
    setAmountNeeded(
      Math.max(
        (Math.floor((kagumo) / 1000) + 1) * 1000 -
        (kagumo),
        0
      )
    )
  }, [])

  setTimeout(() => {
    getPercentage()
  }, 1000)

  const getPercentage = () => {
    const percentage = (kagumo / TOTAL_NEEDED) * 100
    setProgressCount(percentage)
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
        <p>{`₳${TOTAL_NEEDED} to get to pool total`}</p>
      )}
    </div>
  )
}

export default ProgressBar
