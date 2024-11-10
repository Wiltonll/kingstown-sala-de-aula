const { DataTypes } = require('sequelize');
const sequelize = require('../infraestrutura/sequelize');
const Turma = require('./turmaModel');
const Arquivo = require('./arquivoModel');

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
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
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

Turma.hasMany(TurmaCampos, { foreignKey: 'turma_id', as: 'campos' });
TurmaCampos.belongsTo(Turma, { foreignKey: 'turma_id', as: 'turma' });
TurmaCampos.hasMany(Arquivo, { foreignKey: 'campo_id', as: 'arquivos' });
Arquivo.belongsTo(TurmaCampos, { foreignKey: 'campo_id', as: 'campo' });

module.exports = TurmaCampos;