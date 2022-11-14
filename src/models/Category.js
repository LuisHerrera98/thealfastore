import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'


export const Category = sequelize.define('categories',{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    category_name: {
        type: DataTypes.STRING
    }
},{
    timestamps: false
});