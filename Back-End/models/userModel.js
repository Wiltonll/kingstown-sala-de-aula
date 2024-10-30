const { DataTypes } = require('sequelize');
const sequelize = require('../infraestrutura/sequelize');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: { 
        type: DataTypes.ENUM("admin", "user"), // Enum para especificar cargos
        defaultValue: "user", // Cargo padrão
        allowNull: false 
    }
}, {
    tableName: 'user',
    timestamps: false
});

module.exports = User;