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
        makeScore("minesweeper", 1, 100),
        makeScore("minesweeper", 1, 100),
        makeScore("minesweeper", 1, 100),
        makeScore("minesweeper", 2, 100),
        makeScore("minesweeper", 3, 100),
        makeScore("minesweeper", 4, 100),
        makeScore("minesweeper", 5, 100),
        makeScore("minesweeper", 5, 100),
        makeScore("minesweeper", 5, 100),
        makeScore("minesweeper", 5, 100),
        makeScore("snake", 1, 20),
        makeScore("snake", 1, 20),
        makeScore("snake", 1, 20),
        makeScore("snake", 1, 20),
        makeScore("snake", 1, 20),
        makeScore("snake", 1, 20),
        makeScore("snake", 2, 20),
        makeScore("snake", 2, 20),
        makeScore("snake", 3, 20),
        makeScore("snake", 3, 20),
        makeScore("snake", 3, 20),
        makeScore("snake", 4, 20),
        makeScore("snake", 5, 20),
        makeScore("snake", 5, 20),
        makeScore("snake", 5, 20),
        makeScore("snake", 5, 20),
        makeScore("snake", 5, 20),
        makeScore("xox", 3, 50),
        makeScore("xox", 2, 50),
        makeScore("xox", 1, 50),
        makeScore("xox", 1, 50),
        makeScore("xox", 1, 50),
        makeScore("xox", 5, 50),
        makeScore("xox", 5, 50),
        makeScore("xox", 5, 50),
        makeScore("xox", 5, 50),
        makeScore("flashcards", 1, 1000),
        makeScore("flashcards", 2, 1000),
        makeScore("flashcards", 3, 1000),
        makeScore("flashcards", 5, 1000),
        makeScore("flashcards", 5, 1000),
        makeScore("flashcards", 5, 1000),
        makeScore("flashcards", 5, 1000),
        makeScore("flashcards", 5, 1000),
        makeScore("flashcards", 5, 1000),
        makeScore("flashcards", 5, 1000),
        makeScore("flashcards", 5, 1000),
        makeScore("memorygame", 1, 2000),
        makeScore("memorygame", 2, 1000),
        makeScore("memorygame", 2, 1000),
        makeScore("memorygame", 2, 1000),
        makeScore("memorygame", 2, 1000),
        makeScore("quiz", 1, 500),
        makeScore("quiz", 4, 500),
        makeScore("quiz", 4, 500),
        makeScore("quiz", 4, 500),
        makeScore("quiz", 4, 500),
        makeScore("quiz", 4, 500),
        makeScore("quiz", 4, 500),
        makeScore("quiz", 4, 500),
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
        makeUser("Roach", "roach@fieldeatinggrass.net"),
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Scores", null, {});
  },
};
