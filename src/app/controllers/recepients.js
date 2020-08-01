import recepient from "../models/recipients";
import User from "../models/User";
class ControllerRecepients {
  async store(req, res) {
    try {
      //pegando o administrador que cadastrou
      const { id, email } = await User.findByPk(req.userId);

      console.log({ id, email });
      console.log(req.body);

      const {
        name_recepient,
        rua_recepient,
        number_recepient,
        complement_recepient,
        state_recepient,
        city_recepient,
        cep_recepient,
      } = await recepient.create(req.body);

      return res.json({
        cod_envio,
        name_recepient,
        rua_recepient,
        number_recepient,
        complement_recepient,
        state_recepient,
        city_recepient,
        cep_recepient,
      });
    } catch (error) {
      console.log("mostrando erro " + error);
    }
  }

  async update(req, res) {
    const cadRecepients = await recepient.findByPk(req.body.cod_envio);

    const {
      name_recepient,
      rua_recepient,
      number_recepient,
      complement_recepient,
      state_recepient,
      city_recepient,
      cep_recepient,
    } = await cadRecepients.update(req.body);
    //console log do objeto cadastrado
    return res.json({
      name_recepient,
      rua_recepient,
      number_recepient,
      complement_recepient,
      state_recepient,
      city_recepient,
      cep_recepient,
    });
  }
}
export default new ControllerRecepients();
