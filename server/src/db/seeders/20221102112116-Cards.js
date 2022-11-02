"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const cards = [
      {
        cardId: 1,
        img: "1",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 1,
        img: "1",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 2,
        img: "2",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 2,
        img: "2",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 3,
        img: "3",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 3,
        img: "3",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 4,
        img: "4",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 4,
        img: "4",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 5,
        img: "5",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 5,
        img: "5",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 6,
        img: "6",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 6,
        img: "6",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 7,
        img: "7",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 7,
        img: "7",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 8,
        img: "8",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 8,
        img: "8",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("MemoryGames", cards);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("MemoryGames", null);
  },
};
