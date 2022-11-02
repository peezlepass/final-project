"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const questions = [
      {
        question: "Просто какой то вопрос 1",
        var1: "Вариант ответа 1",
        var2: "Вариант ответа 2",
        current: "Вариант ответа 1",
        status: null,
        img: "https://cdnb.artstation.com/p/assets/images/images/008/185/067/medium/stefan-s-untitled-1.jpg?1511032697",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Просто какой то вопрос 2",
        var1: "Вариант ответа 1",
        var2: "Вариант ответа 2",
        current: "Вариант ответа 2",
        status: null,
        img: "https://cdnb.artstation.com/p/assets/images/images/008/185/069/medium/stefan-s-fight-6.jpg?1511032700",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Просто какой то вопрос 3",
        var1: "Вариант ответа 1",
        var2: "Вариант ответа 2",
        current: "Вариант ответа 2",
        status: null,
        img: "https://cdnb.artstation.com/p/assets/images/images/008/185/097/medium/stefan-s-fight-3.jpg?1511032707",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Просто какой то вопрос 4",
        var1: "Вариант ответа 1",
        var2: "Вариант ответа 2",
        current: "Вариант ответа 1",
        status: null,
        img: "https://cdna.artstation.com/p/assets/images/images/008/185/148/medium/stefan-s-vizima-2.jpg?1511032787",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Просто какой то вопрос 5",
        var1: "Вариант ответа 1",
        var2: "Вариант ответа 2",
        current: "Вариант ответа 1",
        status: null,
        img: "https://cdnb.artstation.com/p/assets/images/images/008/185/153/medium/stefan-s-swamp-2.jpg?1511032788",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Просто какой то вопрос 6",
        var1: "Вариант ответа 1",
        var2: "Вариант ответа 2",
        current: "Вариант ответа 1",
        status: null,
        img: "https://cdna.artstation.com/p/assets/images/images/008/185/202/medium/stefan-s-skellige-23.jpg?1511032839",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Просто какой то вопрос 7",
        var1: "Вариант ответа 1",
        var2: "Вариант ответа 2",
        current: "Вариант ответа 1",
        status: null,
        img: "https://cdna.artstation.com/p/assets/images/images/008/185/116/medium/stefan-s-kaer-2.jpg?1511032742",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Quizzes", questions);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Quizzes", null);
  },
};
