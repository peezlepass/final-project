"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const cards = [
      {
        src: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-39/256/The-Witcher-2-Assassins-of-Kings-2-icon.png",
        matched: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        src: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-03/256/The-Witcher-1-icon.png",
        matched: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        src: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-24/256/The-Witcher-Enhaced-Edition-1-icon.png",
        matched: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        src: "https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-24/256/The-Witcher-Enhaced-Edition-2-icon.png",
        matched: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        src: "https://icons.iconarchive.com/icons/iconshock/narnia/256/Peters-Sword-icon.png",
        matched: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        src: "https://icons.iconarchive.com/icons/google/noto-emoji-food-drink/256/32436-wine-glass-icon.png",
        matched: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        src: "https://icons.iconarchive.com/icons/aha-soft/desktop-halloween/256/Boiler-icon.png",
        matched: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        src: "https://icons.iconarchive.com/icons/cavemanmac/witchery/128/Potion-icon.png",
        matched: false,
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
