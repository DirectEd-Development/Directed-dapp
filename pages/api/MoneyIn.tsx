import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'


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

    console.log(query.results)

    res.status(200).json(query.results)

     


}

