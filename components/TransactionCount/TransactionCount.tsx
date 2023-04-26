import { useEffect, useState } from 'react';

interface TransactionCount {
  tx_hash: string;
}

const TransactionCount = () => {
  const [wallet1, setWallet1] = useState<TransactionCount[]>([]);
  const [wallet2, setWallet2] = useState<TransactionCount[]>([]);

  useEffect(() => {
    fetch('https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1xyvc346z883y6x5a07f602kywnalnnpvljqfearrrgxjl4jmj6um7hskwglsnmdgdftmnh69n6f47vnp3njwpnj8anqqzvx2fl/transactions?count=100&order=desc', {
      headers: {
        'project_id': 'mainnetDmoF1dWjxVsomHBGoDEtqILefsKyDGPx'
      }
    })
    .then(response => response.json())
    .then(data => {
      setWallet1(data);
    });

    fetch('https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1x8c0hsmp3ya69aqvntdnanp2d3cqaj3kmlmjctalw8k5lu8sl0pkrzfm5t6qexkm8mxz5mrspm9rdhlh9shm7u0dflcqjcd9va/transactions?count=100&order=desc', {
      headers: {
        'project_id': 'mainnetDmoF1dWjxVsomHBGoDEtqILefsKyDGPx'
      }
    })
    .then(response => response.json())
    .then(data => {
      setWallet2(data);
    });
  }, []);

  return (
    <div>
      <h1>Last 10 Transactions</h1>
      <p>Maryhill x Ngong Transactions: {wallet1.length}</p>
      {/* {transactions1.map(transaction => (
        <div key={transaction.tx_hash}>
          {transaction.tx_hash}
        </div>
      ))} */}
      <p>Kagumo x Mangu Transactions: {wallet2.length}</p>
      {/* {transactions2.map(transaction => (
        <div key={transaction.tx_hash}>
          {transaction.tx_hash}
        </div>
      ))} */}
    </div>
  );
};

export default TransactionCount;
