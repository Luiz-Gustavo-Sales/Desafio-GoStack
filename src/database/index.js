import Sequelize from "sequelize";

import User from "../app/models/User";
//array com todos os dados
const models = [User];

//importando a conexão do banco de dados
import databaseConfig from "../config/database";

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    //conexão database
    //connection é a variavel do model do metodo init(sequelize)
    this.conection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.conection));
  }
}

export default new DataBase();
