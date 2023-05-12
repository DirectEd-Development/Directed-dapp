import { nftUpdate } from "../../lib/api/nftUpdate";

export default async function handler(req: any, res: any) {
  try {
    const heroes = await nftUpdate.get('/v2/GetCounts/528af4d0-868a-4442-b5e2-caedd3979813');
    const royals = await nftUpdate.get('/v2/GetCounts/ed7a0468-9432-4291-8de5-cfba4fe8766d');
    
    const kagumo = (heroes.data.sold * 995) + (royals.data.sold * 1995);

    res.status(200).json(kagumo );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
