"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const achiv = [
      {
        img: "https://static.stratege.ru/trophies/NPWR11536_00/TROP000_w100h100.PNG",
        title: "Предел возможного",
        desc: "Ого, вы сыграли в каждую игру по 42 раза!",
        cost: 300,
        count: 0,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "https://static.stratege.ru/trophies/NPWR11536_00/TROP036_w100h100.PNG",
        title: "Бомбардир",
        desc: "Достойно, вы прошли сапера",
        cost: 125,
        count: 0,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "https://static.stratege.ru/trophies/NPWR11536_00/TROP045_w100h100.PNG",
        title: "Новый герой",
        desc: "Вы успешно зарегистрировались",
        cost: 100,
        count: 0,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "https://static.stratege.ru/trophies/NPWR11536_00/TROP006_w100h100.PNG",
        title: "Истрибитель яблок",
        desc: "Вы собрали 30 яблок за одну партию в змейке",
        cost: 100,
        count: 0,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "https://static.stratege.ru/trophies/NPWR11536_00/TROP015_w100h100.PNG",
        title: "Хранитель знаний",
        desc: "За одну игру  в квиз, ответили правильно на все вопросы",
        cost: 125,
        count: 0,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "https://static.stratege.ru/trophies/NPWR11536_00/TROP021_w100h100.PNG",
        title: "Что это было?",
        desc: "Взяли и обыграли сами себя в крестики-нолики",
        cost: 125,
        count: 0,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "https://static.stratege.ru/trophies/NPWR11536_00/TROP034_w100h100.PNG",
        title: "Мудрец",
        desc: "Успешно закончить игру по запоминанию карточек",
        cost: 125,
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
