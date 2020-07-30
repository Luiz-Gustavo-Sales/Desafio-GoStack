import User from "../models/User";
import * as yup from "yup";
class userController {
  async store(req, res) {
    const userExist = await User.findOne({ where: { email: req.body.email } });
    if (userExist) {
      return res.status(400).json({ erro: "User exists" });
    }

    const { id, email } = await User.create(req.body);
    console.log(id);
    console.log(email);
    return res.json({
      id,
      email,
    });
  }
}
export default new userController();
