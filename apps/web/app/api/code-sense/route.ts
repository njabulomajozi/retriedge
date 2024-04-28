import { NextRequest } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
	try {
		const response = await axios.post(
			`${process.env.API_CODE_SENSE}/generate-data`,
			{}
		);

		return Response.json(response.data, {
			status: 200,
		});
	} catch (error) {
		return Response.json(
			{
				error,
			},
			{
				status: 500,
			}
		);
	}
}
