'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    
    static associate(models) {
      Pessoas.hasMany(models.Turmas, {
        foreignKey: 'docente_id'
      }) 
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: 'aluno_id'
      })
    }
  }
  Pessoas.init({
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
  });
  return Pessoas;
};