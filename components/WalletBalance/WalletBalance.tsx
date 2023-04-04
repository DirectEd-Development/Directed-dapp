import { useEffect, useState } from "react";
import { getWalletBalance } from "../Blockfrost/Blockfrost";

type WalletBalanceProps = {
  balance: number;
}

function WalletBalance() {
  const [balance, setBalance] = useState<number | null>(null);
  useEffect(() => {
    const balance = async() => {
      const res = await getWalletBalance("stake178c0hsmp3ya69aqvntdnanp2d3cqaj3kmlmjctalw8k5luq6strwv")
      const amountInAda = Math.floor(parseInt(res.controlled_amount)/ 1000000);
      setBalance(amountInAda);
    }
    balance();
  },[])
  
  return (
    <div>
      <p><b>₳{balance}</b></p>
    </div>
  );
}

export default WalletBalance;
