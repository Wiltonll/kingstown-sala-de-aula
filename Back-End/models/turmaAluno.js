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
}, {
    tableName: 'turmaAluno',
    timestamps: false
});

Turma.hasMany(TurmaAluno, { foreignKey: 'turma_id' });
User.hasMany(TurmaAluno, { foreignKey: 'aluno_id' });
TurmaAluno.belongsTo(Turma, { foreignKey: 'turma_id' });
TurmaAluno.belongsTo(User, { foreignKey: 'aluno_id' });

module.exports = TurmaAluno;