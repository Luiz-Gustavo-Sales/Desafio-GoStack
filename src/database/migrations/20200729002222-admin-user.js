const bcrypt = require("bcryptjs");

module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert(
      "users",
      [
        {
          email: "admin@fastfeet2.com",
          password_hash: bcrypt.hashSync("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
