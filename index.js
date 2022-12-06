import { Sequelize } from 'sequelize';
import express from 'express'
import schema from './schema/product.js';
const app = express()
const port = 3000

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'data/data.sqlite'
});

const Products = sequelize.define('products', schema, {timestamps: false});
await Products.sync()

app.get('/', async (req, res) => {
    res.send(await Products.findAll())
})

app.listen(port, () => {
  console.log('Example app listening on port ${port}')
})