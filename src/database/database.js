import Sequelize from 'sequelize';

export const sequelize = new Sequelize('induar', 'postgres', 'password', {
    host: '54.156.167.104',
    dialect: 'postgres',
    logging: false
});
