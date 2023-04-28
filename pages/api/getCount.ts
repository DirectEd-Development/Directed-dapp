import { nftUpdate } from "../../lib/api/nftUpdate";

export default async function handler(req: any, res: any) {
  try {
    const heroes = await nftUpdate.get('/v2/GetCounts/ab9ebe10-673b-43cb-a568-b2f54438dc48');
    const royals = await nftUpdate.get('/v2/GetCounts/1c73676d-d6d0-4e8b-b5e0-8d1eedd404ad');

    const maryhill = heroes.data.free + royals.data.free;
    
    res.status(200).json(maryhill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}