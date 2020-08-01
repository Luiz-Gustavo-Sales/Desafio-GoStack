import Sequelize from "sequelize";
import Recepients from "../app/models/recipients";
import User from "../app/models/User";
//array com todos os dados
const models = [User];
const models2 = [Recepients];
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
    models2.map((model) => model.init(this.conection));
  }
}

export default new DataBase();
