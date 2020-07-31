import recepient from "../models/recipients";
import User from "../models/User";
class ControllerRecepients {
  async store(req, res) {
    try {
      const authHeader = req.headers.authorization;
      //validando token
      if (!authHeader) {
        return res.json({ erro: "erro not provided" });
      }
      //pegando o administrador que cadastrou
      const { id, email } = await User.findByPk(req.userId);
      //
      console.log({ id, email });
      console.log(req.body);
      const {
        nameAdmin,
        nameRecipient,
        ruaRecipient,
        numberRecipient,
        complementoRecipient,
        stateRecipient,
        cityRecipient,
        cepRecipient,
      } = await recepient.create(req.body);

      return res.json({
        nameAdmin,
        nameRecipient,
        ruaRecipient,
        numberRecipient,
        complementoRecipient,
        stateRecipient,
        cityRecipient,
        cepRecipient,
      });
    } catch (error) {
      console.log("mostrando erro" + error);
    }
  }
}
export default new ControllerRecepients();
