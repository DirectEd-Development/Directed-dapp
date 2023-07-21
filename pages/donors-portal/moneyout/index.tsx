import React, {useEffect, useState} from 'react'
import { DonorLayout } from '../../../components'
import { Table, Tooltip } from '@nextui-org/react';



const fetchFronNotion = async () => {
    const res = await fetch('/api/MoneyOut')
    const data = await res.json()

    console.log("data", data)

    return data
    }

function index() {
    const [data, setData] = useState<any>(false)
    const formatCardanoWalletAddress = (address:string) => {
      const firstChars = address.slice(0, 7); // Number of characters to display from the beginning
      const lastChars = address.slice(-7); // Number of characters to display from the end
    
      return `${firstChars}...${lastChars}`;
    };

    const getFirstWalletAddressAndCount = (walletsString:string) => {
      const walletsArray = walletsString.split(',').map((wallet:string) => wallet.trim());
      const firstAddress =formatCardanoWalletAddress(walletsArray[0])
      const totalCount = walletsArray.length;
    
      return { firstAddress, totalCount };
    };

    const formatTransactionHash = (txHash:string) => {
      // Extract the first 8 characters and the last 8 characters of the transaction hash
      const firstChars = txHash.slice(0, 8);
      const lastChars = txHash.slice(-8);
    
      return `${firstChars}..${lastChars}`;
    };

    const truncateDescription = (description:string) => {
      const maxLength = 75;
      if (description.length <= maxLength) {
        return description;
      } else {
        return description.slice(0, maxLength) + '...';
      }
    };

    const extractCurrencies = (amount:string) => {
      const currencies = amount
        .split(',') // Split the amount string by commas
        .map((currency:any) => currency.trim()) // Trim any leading/trailing spaces from each currency
        .filter((currency) => currency !== ''); // Remove any empty entries (in case of consecutive commas)
    
      return currencies;
    };
    
   useEffect(() => {

        const fetchData = async () => {
            const result = await fetchFronNotion()
            setData(result)
            console.log("data",data)
        }
        fetchData()
    }, [])

  

  return (
    <DonorLayout>
   

   
        <Table
      lined
      headerLined
      shadow={true}
      aria-label="Example static collection table"
      bordered={true}
      css={{
        height: "auto",
        minWidth: "80%",
      
        
      }}

  style={{
    marginTop: "20px",
  }}
     
    >
      <Table.Header>
        <Table.Column>DATE</Table.Column>
        <Table.Column>CATEGORY</Table.Column>
        <Table.Column>FROM WALLET</Table.Column>
        <Table.Column>TO WALLET</Table.Column>
        <Table.Column>TX HASH</Table.Column>
        <Table.Column>AMOUNT</Table.Column>
        <Table.Column>DESCRIPTION</Table.Column>

      </Table.Header>
    
      <Table.Body>
      {
      data?
        

      data.map((item:any, index:any)=>{
        return(
        <Table.Row key={index}>
          <Table.Cell><a>{item.date}</a></Table.Cell>
          <Table.Cell><a>{item.date}</a></Table.Cell>
          <Table.Cell>
                <Tooltip
                color="success"
                content={item.fromWallet}
                placement="top"
                 >
                  {formatCardanoWalletAddress(item.fromWallet)}
              </Tooltip>
            
            </Table.Cell>
          

          <Table.Cell>
            <Tooltip
                color="success"
                content={item.toWallet}
                placement="top"
                  >
            {getFirstWalletAddressAndCount(item.toWallet).firstAddress}
            </Tooltip>
            </Table.Cell>
          <Table.Cell>
            <Tooltip
                color="success"
                content={item.txHash}
                placement="top"
                  >
            {<a
          style={{
            color: '#2b2b2b',
            textDecoration: 'underline',
          }}
          target="_blank"
          href={`https://explorer.cardano.org/en/transaction?id=${item.txHash}`}
          >
            {formatTransactionHash(item.txHash)}
            </a>}
            </Tooltip>
            </Table.Cell>
          <Table.Cell>{
            <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>

              {
                extractCurrencies(item.amount).map((currency, index) => (
                  <span key={index}>
                    {currency}
                    {index < extractCurrencies(item.amount).length - 1 ? ', ' : ''}
                  </span>
            ))
              }
            </div>
            }</Table.Cell>
          <Table.Cell>
          <Tooltip
                color="success"
                content={item.description}
                placement="top"
                 >

          {truncateDescription(item.description)}
          </Tooltip>
           </Table.Cell>
        </Table.Row>
        )
      })
    
 
        
       

        
          :
        <Table.Row>
        <Table.Cell>...</Table.Cell>
        <Table.Cell>...</Table.Cell>
        <Table.Cell>...</Table.Cell>
        <Table.Cell>...</Table.Cell>
        <Table.Cell>...</Table.Cell>
        <Table.Cell>...</Table.Cell>
        </Table.Row>

      
      }
      </Table.Body>
    
   
    </Table>


    </DonorLayout>
  )
}

export default index