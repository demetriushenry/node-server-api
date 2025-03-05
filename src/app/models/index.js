import { DB, HOST, PASSWORD, USER, dialect as _dialect, pool as _pool, port as _port } from '../config/db.config.js';

import Sequelize from 'sequelize';
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: _dialect,
  port: _port,
  operatorsAliases: false,

  pool: {
    max: _pool.max,
    min: _pool.min,
    acquire: _pool.acquire,
    idle: _pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.devices = require('./device.model.js')(sequelize, Sequelize);
db.categories = require('./category.model.js')(sequelize, Sequelize);

export default db;
