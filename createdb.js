import { Sequelize } from 'sequelize';

import schema from './schema/product.js';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'data/data.sqlite'
});

const Products = sequelize.define('products', schema, {timestamps: false});
await Products.sync()

await Products.build({ name: "AIR FORCE MAX" }).save();
await Products.build({ name: "SUPERSTARS" }).save();
await Products.build({ name: "UGGS" }).save();
