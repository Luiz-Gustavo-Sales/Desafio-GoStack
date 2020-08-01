import jwt from "jsonwebtoken";
//biblioteca pega uma função de callback que podemos usar Async Await
import { promisify } from "util";
export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  //validando token
  if (!authHeader) {
    return res.json({ erro: "erro not provided" });
  }
  //usando função split para  quebrar o token em um array onde el vai retorna Bearer mmais o Token
  //usando desestruturação pegando apenas o token
  const [, token] = authHeader.split(" ");
  try {
    const decoded = await promisify(jwt.verify)(
      token,
      "265b0ce8614850664ae12a85c0617355"
    );
    console.log(decoded);
    //recebendo o ID na requisição
    req.userId =decoded.id;
  } catch (error) {
    return res.json({erro:"Token Invalid"})
  }
  return next();
};
