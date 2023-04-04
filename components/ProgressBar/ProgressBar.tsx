import { useEffect, useState } from "react";
import { getWalletBalance } from "../Blockfrost/Blockfrost";

type WalletBalanceProps = {
  balance: number;
}

function WalletBalance({ balance }: WalletBalanceProps) {
  return (
    <div>
      <p><b>₳{balance}</b></p>
    </div>
  );
}

type ProgressBarProps = {}

const ProgressBar = ({}: ProgressBarProps) => {
  const [balance, setBalance] = useState<number | null>(null);
  const [amountNeeded, setAmountNeeded] = useState<number | null>(null);

  useEffect(() => {
    const fetchBalance = async() => {
      const res = await getWalletBalance("stake178c0hsmp3ya69aqvntdnanp2d3cqaj3kmlmjctalw8k5luq6strwv")
      const amountInAda = Math.floor(parseInt(res.controlled_amount) / 1000000);
      setBalance(amountInAda);
      setAmountNeeded(Math.max((Math.floor(amountInAda / 1000) + 1) * 1000 - amountInAda, 0));
    }
    fetchBalance();
  },[])

  return (
    <div className='progress-bar'>
      <div className='progress-bar__funds'>
        {/* <WalletBalance balance={balance} /> */}
      </div>
      <div className='progress-bar__milestone-bar'>
        <div
          className='progress-bar__milestone-progress'
          style={{ width: '5%' }}
        ></div>
      </div>
      {amountNeeded !== null && <p>{`₳${amountNeeded} to the next scholarship`}</p>}
    </div>
  )
}

export default ProgressBar;
