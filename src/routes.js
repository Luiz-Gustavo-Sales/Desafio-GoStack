import { Router } from "express";
import userController from "./app/controllers/User";
import SessionController from "./app/controllers/SessionsController";
import authMiddlewares from "./app/middlewares/auth";
import recepient from "./app/controllers/recepients"
const routes = new Router();

routes.post("/users", userController.store);

routes.post("/sessions", SessionController.store);

//apenas usuários autenticados pelos tokes vão poder usar as proximas  rotas, apenas registrados
routes.use(authMiddlewares);

routes.post("/cadDestinatario",recepient.store)
module.exports = routes;
