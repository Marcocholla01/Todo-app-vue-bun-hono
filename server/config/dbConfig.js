// config/dbConfig.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('todo_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging:false
});

export default sequelize;
