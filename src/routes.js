import { Router } from "express";
import userController from "./app/controllers/User";
const routes = new Router();

routes.post("/users", userController.store);

module.exports = routes;
