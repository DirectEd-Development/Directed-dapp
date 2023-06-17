import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const milestones: any = [0, 0, 0, 0, 0, 0];
        const response = await axios.get('http://directed.us-east-1.elasticbeanstalk.com/students/');
        const data = response.data;

        const school = req.body.school; // Get the "school" parameter from req.body

        for (let i = 0; i < data.length; i++) {
            const student = data[i];

            // Check if the student belongs to the specified school
            if (student.school === school) {
                const milestone = student.milestones_achieved;

                // Increment the respective milestone count based on the student's milestone achieved
                if (milestone === 0) {
                    milestones[0] += 1;
                } else if (milestone === 1) {
                    milestones[1] += 1;
                } else if (milestone === 2) {
                    milestones[2] += 1;
                } else if (milestone === 3) {
                    milestones[3] += 1;
                } else if (milestone === 4) {
                    milestones[4] += 1;
                } else if (milestone === 5) {
                    milestones[5] += 1;
                }
            }
        }

        res.status(200).json({
            milestones
        });
    } catch (error) {
        console.log(error);
    }
}
