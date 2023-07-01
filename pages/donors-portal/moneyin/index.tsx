import React, {useEffect, useState} from 'react'
import { DonorLayout } from '../../../components'

interface UTXO {
    amount: string;
    block: string;
    tx_hash: string;
    tx_index: number;
    output_index: number;
  }

const fetchFronNotion = async () => {
    const res = await fetch('/api/MoneyIn')
    const data = await res.json()

    console.log("data", data)

    return data
    }

function index() {
    const [data, setData] = React.useState([])

   useEffect(() => {

        const fetchData = async () => {
            const result = await fetchFronNotion()
            setData(result)
        }
        fetchData()
    }, [])

    const [utxos, setUTXOs] = useState<UTXO[]>([]);
    useEffect(() => {
        const projectId = 'mainnetDmoF1dWjxVsomHBGoDEtqILefsKyDGPx';
        const txHash = 'f3801d876023406e6efc65a7e089669b94372cdb35e630c1d0b58170658d4e43';
    
        fetch(`https://cardano-mainnet.blockfrost.io/api/v0/txs/${txHash}/utxos`, {
          headers: {
            project_id: projectId,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data); // Log the response
            setUTXOs(data);
          })
          .catch((error) => console.error(error));
      }, []);


  return (
    <DonorLayout>
    <h1>
        Money In
    </h1>
    <p>
        {JSON.stringify(data)}
    </p>

    </DonorLayout>
  )
}

export default index