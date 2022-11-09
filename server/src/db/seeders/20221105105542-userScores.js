const bcrypt = require("bcrypt");

function makeScore(gameName, userId, score) {
  return {
    gameName,
    userId,
    score,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

function makeUser(name, email) {
  return {
    name,
    email,
    password: bcrypt.hashSync("123", 10),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Scores",
      [
        makeScore("minesweeper", 1, 100),
        makeScore("minesweeper", 2, 100),
        makeScore("minesweeper", 3, 100),
        makeScore("minesweeper", 4, 100),
        makeScore("snake", 1, 2),
        makeScore("snake", 1, 2),
        makeScore("snake", 1, 2),
        makeScore("snake", 1, 2),
        makeScore("snake", 1, 2),
        makeScore("snake", 1, 2),
        makeScore("snake", 2, 2),
        makeScore("snake", 2, 2),
        makeScore("snake", 3, 2),
        makeScore("snake", 3, 2),
        makeScore("snake", 3, 2),
        makeScore("snake", 4, 2),
        makeScore("xox", 3, 30),
        makeScore("xox", 2, 30),
        makeScore("xox", 1, 30),
        makeScore("xox", 1, 30),
        makeScore("xox", 1, 30),
        makeScore("memorygame", 1, 20),
        makeScore("memorygame", 2, 20),
        makeScore("memorygame", 3, 20),
        makeScore("memorygame", 4, 20),
        makeScore("memorygame", 4, 20),
        makeScore("quiz", 1, 1),
        makeScore("quiz", 2, 1),
        makeScore("quiz", 3, 1),
        makeScore("quiz", 4, 1),
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Users",
      [
        makeUser("Geralt", "geralt@rivia.net"),
        makeUser("Yennefer", "yennefer@vengerberg.net"),
        makeUser("Ciri", "ciri@cintra.net"),
        makeUser("Jaskier", "dandellion@valleyofplenty.net"),
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Scores", null, {});
  },
};
