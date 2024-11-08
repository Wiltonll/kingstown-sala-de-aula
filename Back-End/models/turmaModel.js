const { DataTypes } = require('sequelize');
const sequelize = require('../infraestrutura/sequelize');
const User = require('./userModel');

const Turma = sequelize.define('Turma', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    professor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'id',
        },
    },

}, {
    tableName: 'turma',
    timestamps: false
});

User.hasMany(Turma, { foreignKey: 'professor_id' });
Turma.belongsTo(User, { foreignKey: 'professor_id' })

module.exports = Turma;