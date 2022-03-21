import { Model, Optional } from 'sequelize';

const db = require('../database');

interface UserAttributes {
  id: number;
  username: string;
  password: string;
}
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {}

module.exports = db.define<UserInstance>('user', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
});
