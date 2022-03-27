'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Turmas', [
      {
        data_inicio: '2022-01-20',
        nivel_id: 1,
        aluno_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: '2022-01-19',
        nivel_id: 2,
        docente_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Turmas', null, {});
  }
};
