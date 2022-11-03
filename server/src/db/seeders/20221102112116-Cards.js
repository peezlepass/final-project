"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const cards = [
      {
        cardId: 1,
        img: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-39/256/The-Witcher-2-Assassins-of-Kings-2-icon.png",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 1,
        img: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-39/256/The-Witcher-2-Assassins-of-Kings-2-icon.png",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 2,
        img: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-03/256/The-Witcher-1-icon.png",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 2,
        img: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-03/256/The-Witcher-1-icon.png",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 3,
        img: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-24/256/The-Witcher-Enhaced-Edition-1-icon.png",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 3,
        img: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-24/256/The-Witcher-Enhaced-Edition-1-icon.png",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 4,
        img: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-24/256/The-Witcher-Enhaced-Edition-2-icon.png",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 4,
        img: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-24/256/The-Witcher-Enhaced-Edition-2-icon.png",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 5,
        img: "https://icons.iconarchive.com/icons/iconshock/narnia/256/Peters-Sword-icon.png",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 5,
        img: "https://icons.iconarchive.com/icons/iconshock/narnia/256/Peters-Sword-icon.png",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 6,
        img: "https://icons.iconarchive.com/icons/google/noto-emoji-food-drink/256/32436-wine-glass-icon.png",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 6,
        img: "https://icons.iconarchive.com/icons/google/noto-emoji-food-drink/256/32436-wine-glass-icon.png",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 7,
        img: "https://icons.iconarchive.com/icons/aha-soft/desktop-halloween/256/Boiler-icon.png",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 7,
        img: "https://icons.iconarchive.com/icons/aha-soft/desktop-halloween/256/Boiler-icon.png",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 8,
        img: "https://icons.iconarchive.com/icons/cavemanmac/witchery/128/Potion-icon.png",
        status: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardId: 8,
        img: "https://icons.iconarchive.com/icons/cavemanmac/witchery/128/Potion-icon.png",
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
