import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

type ItemType={
    date:string,
    fromWallet:string,
    toWallet:string,
    txHash:string,
    amount:string,
    description:string,
}

//database id type
const notionSecret = process.env.NOTION_SECRET
const databaseId = process.env.MONEY_IN_ID

const notion = new Client({ auth: notionSecret })


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(notionSecret === undefined || databaseId === undefined) {
        res.status(500).json({ error: 'Notion secret or database id not set' })
        return
    }

    const query = await notion.databases.query({
        database_id: databaseId,
    })

    const newData:Array<ItemType> = []

    query.results.forEach(
        (item, index)=>{
            console.log(`ITEM ${index}`, item)
            let newItem:ItemType={
                date:"",
                fromWallet:"",
                toWallet:"",
                txHash:"",
                amount:"",
                description:"",
            }
            newItem.date=item.properties.date.date.start
            newItem.fromWallet=item.properties.From_Wallet.rich_text[0].text.content.toString()
            newItem.amount=item.properties.Amount.rich_text[0].text.content.toString()
            newItem.description=item.properties.Description.title[0].text.content.toString()
            newItem.toWallet=item.properties.To_Wallet.rich_text[0].text.content.toString()
            newItem.txHash=item.properties.Tx_Hash.rich_text[0].text.content.toString()
    
            newData.push(newItem)
    
    
    
    
    
        }
    )


    console.log(newData)

    res.status(200).json(newData)

     


}

