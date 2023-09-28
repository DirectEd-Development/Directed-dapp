import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

type ItemType={
    date:string,
    fromWallet:string,
    toWallet:string,
    txHash:string,
    amount:string,
    description:string,
    category:string
}

//database id type
const notionSecret = 'secret_rUSJrEcZEXaBbpCLv6QPWe3g8nZ5bxlmbymUoHI77oS' /*process.env.NOTION_SECRET*/
const databaseId = '8b9c912359904ee9986e3e0a3316459e' /*process.env.MONEY_OUT_ID*/

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
                category:""
            }
            if ("properties" in item) {
                //date
                if ("date" in item.properties) {
                   if("date" in item.properties.date && item.properties.date.date!==null) {
                    if("start" in item.properties.date.date){
                        newItem.date=item.properties.date.date.start
                    }
                   }
                }
                if("rich_text" in item.properties.From_Wallet && "rich_text" in item.properties.Amount && "rich_text" in item.properties.Description && "rich_text" in item.properties.To_Wallet && "rich_text" in item.properties.Tx_Hash && "title" in item.properties.Category){
                    if("text" in item.properties.From_Wallet.rich_text[0] && "text" in item.properties.Amount.rich_text[0] && "text" in item.properties.Description.rich_text[0] && "text" in item.properties.To_Wallet.rich_text[0] && "text" in item.properties.Tx_Hash.rich_text[0] && "text" in item.properties.Category.title[0]){
                        newItem.fromWallet=item.properties.From_Wallet.rich_text[0].text.content.toString()
                        newItem.amount=item.properties.Amount.rich_text[0].text.content.toString()
                        newItem.description=item.properties.Description.rich_text[0].text.content.toString()
                        newItem.toWallet=item.properties.To_Wallet.rich_text[0].text.content.toString()
                        newItem.txHash=item.properties.Tx_Hash.rich_text[0].text.content.toString()
                        newItem.category=item.properties.Category.title[0].text.content.toString()
        
            }
        }
    }
    
            newData.push(newItem)
    
    
    
    
    
        }
    )


    console.log(newData)

    res.status(200).json(newData)

     


}

