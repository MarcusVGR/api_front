'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'Rampinelli',
        ativo: true,
        email: 'marcusvgr@gmail.com',
        role: 'Aluno',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Cassiano',
        ativo: true,
        email: 'cassiano.yooga@gmail.com',
        role: 'Professor',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Pessoas', null, {});
     
  }
};
