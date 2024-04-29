import { PromptTemplate } from '@langchain/core/prompts';
import { getDB, getDBSchema } from '../../adapters/database';
import { google } from '../../adapters/ai';

export const getTestDataDBSchema = async () => {
	const db = await getDB();
	const schema = await getDBSchema(db);

	const prompt = PromptTemplate.fromTemplate(`
		Based on the table schema below:
		{schema}
		
		Write documentation with this outline:
		{outline}

		Documentation: 
	`);

	const formattedPrompt = await prompt.format({
		schema,
		outline: `
			1.Database Design Overview
			- Entity-Relationship (ER) diagram or similar visual representation
			- Brief description of the design, including entities, relationships, and attributes
			- Rules governing relationships between entities
			
			2. Data Model Documentation
			- Detailed description of the data model
			- Data types, constraints, and relationships between tables
			- Examples of data usage in the application
			
			3. Business Rules
			- Validation rules, calculated fields, and other rules governing data
			- Clear and concise documentation with examples
			
			4. Data Dictionary
			- Comprehensive list of all data elements
			- Includes name, data type, and description of each element
			- Updates as the database evolves
			
			5. Security Model
			- Outline of who has access to the database and what actions they can perform
			- Clear and concise documentation with examples
		`,
	});

	const response = await google.llm.invoke(formattedPrompt);

	return response;
};

export const generateTestDataScripts = async () => {
	const db = await getDB();
	const schema = await getDBSchema(db);

	const prompt = PromptTemplate.fromTemplate(`
		Based on the table schema below, write a SQL query that would answer the user's question:
		{schema}
		
		Question: {question}
		PostgreSQL Query:
	`);

	const formattedPrompt = await prompt.format({
		schema,
		question: 'Generate PostgreSQL queries for inserting test data. Return complete scripts',
	});

	const response = await google.llm.invoke(formattedPrompt);

	return response;
};
