import Express from "express";
import routesPayment from "./routes/payment_routes.js";

const Application = Express();

Application.use(routesPayment);

export default Application;
