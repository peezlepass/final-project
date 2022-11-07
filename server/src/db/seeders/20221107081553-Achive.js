"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const achiv = [
      {
        img: "https://static.stratege.ru/trophies/NPWR11536_00/TROP000_w100h100.PNG",
        title: "Название ачивки",
        desc: "Описание что нужно сделать для ачивки",
        cost: 100,
        count: 0,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "https://static.stratege.ru/trophies/NPWR11536_00/TROP010_w100h100.PNG",
        title: "Название ачивки",
        desc: "Описание что нужно сделать для ачивки",
        cost: 100,
        count: 0,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "https://static.stratege.ru/trophies/NPWR11536_00/TROP038_w100h100.PNG",
        title: "Название ачивки",
        desc: "Описание что нужно сделать для ачивки",
        cost: 100,
        count: 0,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "https://static.stratege.ru/trophies/NPWR11536_00/TROP004_w100h100.PNG",
        title: "Название ачивки",
        desc: "Описание что нужно сделать для ачивки",
        cost: 100,
        count: 0,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "https://static.stratege.ru/trophies/NPWR11536_00/TROP015_w100h100.PNG",
        title: "Название ачивки",
        desc: "Описание что нужно сделать для ачивки",
        cost: 100,
        count: 0,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "https://static.stratege.ru/trophies/NPWR11536_00/TROP018_w100h100.PNG",
        title: "Название ачивки",
        desc: "Описание что нужно сделать для ачивки",
        cost: 100,
        count: 0,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "https://static.stratege.ru/trophies/NPWR11536_00/TROP023_w100h100.PNG",
        title: "Название ачивки",
        desc: "Описание что нужно сделать для ачивки",
        cost: 100,
        count: 0,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Achives", achiv);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Achives", null);
  },
};
