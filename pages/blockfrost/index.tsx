import { useEffect, useState } from 'react';
import { Layout } from '../../components';

interface Transaction {
  tx_hash: string;
}

const blockfrost = () => {
  const [transactions1, setTransactions1] = useState<Transaction[]>([]);
  const [transactions2, setTransactions2] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch('https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1xyvc346z883y6x5a07f602kywnalnnpvljqfearrrgxjl4jmj6um7hskwglsnmdgdftmnh69n6f47vnp3njwpnj8anqqzvx2fl/transactions?count=100&order=desc', {
      headers: {
        'project_id': 'mainnetDmoF1dWjxVsomHBGoDEtqILefsKyDGPx'
      }
    })
    .then(response => response.json())
    .then(data => {
      setTransactions1(data);
    });

    fetch('https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1x8c0hsmp3ya69aqvntdnanp2d3cqaj3kmlmjctalw8k5lu8sl0pkrzfm5t6qexkm8mxz5mrspm9rdhlh9shm7u0dflcqjcd9va/transactions?count=100&order=desc', {
      headers: {
        'project_id': 'mainnetDmoF1dWjxVsomHBGoDEtqILefsKyDGPx'
      }
    })
    .then(response => response.json())
    .then(data => {
      setTransactions2(data);
    });
  }, []);

  return (
    <Layout>

    <div>
      <h1>Last 10 Transactions</h1>
      <p>Maryhill x Ngong Transactions: {transactions1.length}</p>
      {/* {transactions1.map(transaction => (
        <div key={transaction.tx_hash}>
          {transaction.tx_hash}
        </div>
      ))} */}
      <p>Kagumo x Mangu Transactions: {transactions2.length}</p>
      {/* {transactions2.map(transaction => (
        <div key={transaction.tx_hash}>
          {transaction.tx_hash}
        </div>
      ))} */}
    </div>
    </Layout>

  );
};

export default blockfrost;
