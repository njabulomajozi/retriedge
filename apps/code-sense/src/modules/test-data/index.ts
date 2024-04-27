import { type VertexAI } from '@langchain/google-vertexai';
import { type SqlDatabase } from 'langchain/sql_db';
import { PromptTemplate } from '@langchain/core/prompts';

interface IGenerateTestDataInput {
	llm: VertexAI;
	db: SqlDatabase;
	schema: string;
}

export const generateTestDataScripts = async (params: IGenerateTestDataInput) => {
	const { db, llm, schema } = params;

	const prompt = PromptTemplate.fromTemplate(`
		Based on the table schema below, write a SQL query that would answer the user's question:
		{schema}
		
		Question: {question}
		PostgreSQL Query:
	`);

	const formattedPrompt = await prompt.format({
		schema,
		question: 'Generate PostgreSQL queries for inserting test data',
	});

	const response = await llm.invoke(formattedPrompt);

	return response;
};
