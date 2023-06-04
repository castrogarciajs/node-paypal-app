import Express from "express";
import routesPayment from "./routes/payment_routes.js";
import { PORT } from "../setup.js";

const Application = Express();

Application.use(routesPayment);

Application.listen(PORT);
console.log(`Server on port ${PORT}`);
