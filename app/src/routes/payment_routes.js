import { Router } from "express";
import {
  cancelOrder,
  captureOrder,
  createOrder,
} from "../controllers/payment_controllers.js";

const routesPayment = Router();

routesPayment.post("/create-order", createOrder);
routesPayment.get("/capture-order", captureOrder);
routesPayment.get("/cancel-order", cancelOrder);

export default routesPayment;
