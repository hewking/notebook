import { Sequelize } from 'sequelize-typescript';
import config from '../../config/config';
import path from 'path';
import NoteEntity from '../../models/db/note';

let dbContext: Sequelize | null = null;

export const buildDbConnection = async () => {
  dbContext = new Sequelize({
    dialect: config.database.driver as any,
    host: config.database.host,
    database: config.database.databasename,
    username: config.database.username,
    password: config.database.password,
    logging: console.log,
    pool: {
      max: config.database.maxConnections,
      min: config.database.minConnections,
      idle: config.database.idle,
    },
    modelPaths: [path.join(__dirname, '../../models/db/')],
  });

  // dbContext.addModels([NoteEntity]);
  await testConnection();
  await sycnModels();
};

export const sycnModels = async () => {
  NoteEntity.sync({ force: true });
};

const testConnection = async () => {
  try {
    await dbContext!!.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export const close = () => {
  if (dbContext) {
    dbContext.close();
  }
};

export const getDbContext = () => {
  return dbContext;
};
