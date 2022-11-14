import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'
import { Image } from './Image.js';


export const Product = sequelize.define('products',{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    category_id:{
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},{
    timestamps: false
});

Product.hasMany(Image, {
    foreignKey: 'product_id',
    source: 'id'
})

Image.belongsTo(Product, {
    foreignKey: 'product_id',
    targetId: 'id'
})