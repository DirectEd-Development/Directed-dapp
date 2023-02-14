import { NextApiResponse } from 'next'
import { data } from '../../data/assets'

export default function handler(
	{ query }: { query: any },
	res: NextApiResponse
) {
	const filtered = data.filter((asset) => asset.id === query.id)

	if (filtered.length > 0) {
		res.status(200).json(filtered[0])
	} else {
		res
			.status(404)
			.json({ message: `Asset with the id of ${query.id} is not found` })
	}
}
