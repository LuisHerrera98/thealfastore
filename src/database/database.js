import Sequelize from 'sequelize';

export const sequelize = new Sequelize('induar', 'postgres', 'password', {
    host: '52.204.121.152',
    dialect: 'postgres',
    logging: false
});
