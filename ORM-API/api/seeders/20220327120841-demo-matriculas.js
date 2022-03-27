'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Matriculas', [
      {
        status: 'confirmado',
        aluno_id: 1,
        turma_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'confirmado',
        docente_id: 2,
        turma_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Matriculas', null, {});
  }
};
