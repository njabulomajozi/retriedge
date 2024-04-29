import { SqlDatabase } from 'langchain/sql_db';
import { DataSource } from 'typeorm';

const getDB = async () => {
	const datasource = new DataSource({
		type: 'postgres',
		host: process.env.DB_HOST,
		port: process.env.DB_PORT as any,
		database: process.env.DB_DATABASE,
		username: process.env.DB_USER,
		password: process.env.DB_PASS
	});

	const db = await SqlDatabase.fromDataSourceParams({
		appDataSource: datasource,
	});

	return db;
};

const getDBSchema = async (db: SqlDatabase) => {
	return await db.getTableInfo();
};

export {
    getDB,
    getDBSchema
}