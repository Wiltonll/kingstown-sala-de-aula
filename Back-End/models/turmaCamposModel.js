const { DataTypes } = require('sequelize');
const sequelize = require('../infraestrutura/sequelize');
const Turma = require('./turmaModel');

const TurmaCampos = sequelize.define('TurmaCampos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    turma_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'turma', // Tabela que contém as turmas
          key: 'id',
        }
    },
    tipo: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    conteudo: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    tableName: 'turmaCampos',
    timestamps: false  
});

Turma.hasMany(TurmaCampos, { foreignKey: 'turma_id'});
TurmaCampos.belongsTo(Turma, {foreignKey: 'turma_id'});

module.exports = TurmaCampos;