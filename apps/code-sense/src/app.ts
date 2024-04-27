import { serve } from '@hono/node-server';
import { Hono } from 'hono';

import { getDB, getDBSchema } from './modules/database';
import { google } from './modules/ai';
import { generateTestDataScripts } from './modules/test-data';

const generateData = async () => {
	const db = await getDB();
	const schema = await getDBSchema(db);

	const response = await generateTestDataScripts({
		db,
		schema,
		llm: google.llm
	});

	return response;
};

const app = new Hono();

app.post('/generate-data', async (c: any) => {
	const response = await generateData();

	return c.json(
		{
			data: {
				response,
			},
		},
		200,
	);
});

app.notFound((c) => {
	return c.json(
		{
			message: '',
		},
		404,
	);
});

app.onError((err, c) => {
	return c.json(
		{
			message: err.message,
		},
		500,
	);
});

serve(app);
