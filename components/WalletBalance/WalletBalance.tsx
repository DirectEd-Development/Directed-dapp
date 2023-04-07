type WalletBalanceProps = {
  balance: number;
}

function WalletBalance({ balance }: WalletBalanceProps) {
  return (
    <div>
      <p><b>₳{balance ?? '-'}</b></p>
    </div>
  );
}

export default WalletBalance;
