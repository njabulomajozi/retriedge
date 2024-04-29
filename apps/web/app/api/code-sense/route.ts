import { NextRequest } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
	try {
		const { type } = await req.json();

		const response = await axios.request({
			method: 'post',
			maxBodyLength: Infinity,
			url: `${process.env.API_CODE_SENSE}/test-data`,
			headers: { 
			  'Content-Type': 'application/json'
			},
			data: JSON.stringify({
				type
			  })
		});

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
