import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
import { config } from 'dotenv';

config();

import { generateTestDataScripts, getTestDataDBSchema } from './modules/test-data';

const app = new Hono();

const mapper = {
	GENERATE: async () => {
		return await generateTestDataScripts();
	},
	SCHEMA: async () => {
		return await getTestDataDBSchema();
	}
}

app.post('/test-data', zValidator(
    'json',
    z.object({
		type: z.enum(['GENERATE', 'SCHEMA'])
    })
  ), async (c) => {
	const {type} = await c.req.json() as {type: 'GENERATE' | 'SCHEMA'};

	const response = await mapper[type]();

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

serve({
	fetch: app.fetch,
	port: (process.env.APP_PORT as any as number) || 3001
  })
