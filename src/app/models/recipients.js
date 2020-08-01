import Sequelize, { Model } from "sequelize";

class recipients extends Model {
  static init(sequelize) {
    super.init(
      {
        cod_envio:Sequelize.INTEGER,
        name_recepient: Sequelize.STRING,
        rua_recepient: Sequelize.STRING,
        number_recepient: Sequelize.INTEGER,
        complement_recepient: Sequelize.STRING,
        state_recepient: Sequelize.STRING,
        city_recepient: Sequelize.STRING,
        cep_recepient: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}
export default recipients;
