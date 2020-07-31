import Sequelize, { Model } from "sequelize";
class recipients extends Model {
  static init(sequelize) {
    super.init(
      {
        nameAdmin: Sequelize.STRING,
        nameRecipient: Sequelize.STRING,
        ruaRecipient: Sequelize.STRING,
        numberRecipient: Sequelize.INTEGER,
        complementRecipient: Sequelize.STRING,
        stateRecipient: Sequelize.STRING,
        cityRecipient: Sequelize.STRING,
        cepRecipient: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
export default recipients;
