const test = {
  database: {
    driver: 'mysql',
    host: '192.168.5.209',
    port: 3307,
    databasename: 'notebook',
    username: 'root',
    password: '123456',
    maxConnections: 500,
    minConnections: 10,
    idle: 10000,
  },
  redis: {
    host: '192.168.5.216',
    port: 6379,
    password: '',
  },

};


export default test;
