import { Router } from "express";

const routesPayment = Router();

routesPayment.get("/");

routesPayment.get("/create-order");
routesPayment.get("/capture-order");
routesPayment.get("/cancel-order");

export default routesPayment;
