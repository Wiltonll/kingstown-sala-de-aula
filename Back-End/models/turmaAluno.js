const { DataTypes } = require('sequelize');
const sequelize = require('../infraestrutura/sequelize');
const User = require('./userModel');
const Turma = require('./turmaModel');

const TurmaAluno = sequelize.define('TurmaAluno', {
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
    aluno_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    nome_turma: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nome_aluno: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'turmaAluno',
    timestamps: false
});

// Relacionamento entre TurmaAluno e Turma (Turma pode ter muitos TurmaAluno)
Turma.hasMany(TurmaAluno, { foreignKey: 'turma_id' });
// Relacionamento entre TurmaAluno e User (Aluno pode estar em muitas Turmas)
User.hasMany(TurmaAluno, { foreignKey: 'aluno_id' });

// Relacionamento inverso de TurmaAluno para Turma e User
TurmaAluno.belongsTo(Turma, { foreignKey: 'turma_id' });
TurmaAluno.belongsTo(User, { foreignKey: 'aluno_id' });

module.exports = TurmaAluno;