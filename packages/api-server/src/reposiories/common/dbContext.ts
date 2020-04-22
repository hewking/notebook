import { Sequelize } from 'sequelize-typescript';
import config from '../../config/config';
import path from 'path';

let dbContext: Sequelize = null;

export const buildDbConnection = () => {
  dbContext = new Sequelize({
    dialect: config.database.driver,
    host: config.database.host,
    port: config.database.port,
    database: config.database.databasename,
    username: config.database.username,
    password: config.database.password,
    operatorsAliases: false,
    logging: console.log,
    pool: {
      max: config.database.maxConnections,
      min: config.database.minConnections,
      idle: config.database.idle,
    },
    modelPaths: [path.join(__dirname, '../../models/db/')],
  });
};

export const getDbContext = () => {
  return dbContext;
};
