import User from "../models/User";
import jwt from "jsonwebtoken";

class SessionsController {
  async store(req, res) {
    //pegando os dados enviado pelo body
    const { email, password } = req.body;

    //buscar usuário pelo e-mail, pois ele é único
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ ok: "User not Foud" });
    }
    //verificando a senha se está correto no banco dedados, usando função description comparando com banco de dados
    if (!(await user.chackPassword(password))) {
      return res.json({ erro: "Senha não confere" });
    }

    const { id } = user;

    return res.json({
      user: {
        id,
        email
      },
      //passando o ID no token e a chave de seguranção e mais o tempo de experiração do TOKEN
      token: jwt.sign({ id }, "265b0ce8614850664ae12a85c0617355", {
        expiresIn: "1D",
      }),
    });
  }
}
export default new SessionsController();
