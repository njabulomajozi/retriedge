import config from 'config';
import { SqlDatabase } from 'langchain/sql_db';
import { DataSource } from 'typeorm';

const getDB = async () => {
	const datasource = new DataSource({
		type: 'postgres',
		host: config.get<string>('database.host'),
		port: config.get<number>('database.port'),
		username: config.get<string>('database.username'),
		password: config.get<string>('database.password'),
		database: config.get<string>('database.database'),
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