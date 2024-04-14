import { Ai } from '@cloudflare/ai';
import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.text('Hello Cloudflare Workers!'));

app.post('/generate-data', async (c: any) => {
	const {
		schema
	} = await c.req.json();

	const ai = new Ai(c.env.AI);

	const stepsPrompt = `
		Generate steps needed to insert 10 rows random data per table into PostgreSQL Database with this structure ${schema}

		Your response should be natural language without SQL queries such as these examples:
		Insert a new customer with name Njabulo and email of name@gmail.com then Insert a new product with name iPhone 13 Mini and price 13999 then Insert a new order with Njabulo's customer id, iPhone 13 Mini's product id
	`;

	const steps = await ai.run('@hf/thebloke/deepseek-coder-6.7b-base-awq', {
		messages: [
			{
				role: 'user',
				content: stepsPrompt,
			},
		],
	});

	const sqlPrompt = `
		Using this PostgreSQL DDLs ${schema}
		
		${(steps as any).response.replaceAll('\n\t\t', ' ')}
	`;

	const sql = await ai.run('@cf/defog/sqlcoder-7b-2', {
		messages: [
			{
				role: 'user',
				content: sqlPrompt,
			},
		],
	});

	return c.json(
		{
			data: {
				steps: (steps as any).response.replaceAll('\n\t\t', ' '),
				sql: (sql as any).response
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

export default app;
