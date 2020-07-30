import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING,
        passwordHash: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
      },
      {
        sequelize,
      }
    );
    //passando HASH na senha
    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.passwordHash = await bcrypt.hash(user.password, 9);
      }
    });
    return this;
  }
}
export default User;
