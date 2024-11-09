const { DataTypes } = require('sequelize');
const sequelize = require('../infraestrutura/sequelize');
const Turma = require('./turmaModel')

const Arquivo = sequelize.define('Arquivo', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    turma_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Turma,
          key: 'id',
        },
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.ENUM('video', 'link', 'pdf', 'docx', 'excel', 'img', 'pptx'),
        allowNull: false,
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    data_upload: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'arquivo',
    timestamps: false
});

Turma.hasMany(Arquivo, { foreignKey: 'turma_id', as: 'arquivos' })
Arquivo.belongsTo(Turma, { foreignKey: 'turma_id', as: 'arquivos' })

module.exports = Arquivo;