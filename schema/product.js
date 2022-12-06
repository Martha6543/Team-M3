import { Sequelize } from 'sequelize';

export default {
    
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
};