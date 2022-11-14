import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'


export const Image = sequelize.define('images',{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    url: {
        type: DataTypes.STRING
    }
},{
    timestamps: false
});
