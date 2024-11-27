const { DataTypes } = require('sequelize');
const sequelize = require('../infraestrutura/sequelize');
const Turma = require('./turmaModel')

const Mural = sequelize.define('Mural', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    data_criacao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    turma_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'turma', 
          key: 'id',
        },
    }
}, {
    tableName: 'mural',
    timestamps: false
});


Turma.hasMany(Mural, { foreignKey: 'turma_id', as: 'murais' });
Mural.belongsTo(Turma, { foreignKey: 'turma_id', as: 'turma' });

module.exports = Mural;