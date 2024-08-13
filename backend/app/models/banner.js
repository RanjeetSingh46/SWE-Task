const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Banner = sequelize.define('Banner', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    timer: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    link: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    visible: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}
, {
    tableName: 'banners', // Explicitly set table name if desired
    timestamps: true, // Include if you want createdAt and updatedAt fields
}
);

module.exports = Banner;
