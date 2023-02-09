import { NextApiRequest, NextApiResponse } from 'next'
import { data } from '../../data/assets'
import { Assets } from '../../types/assets'

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Assets[]>
) {
	res.status(200).json(data)
}
