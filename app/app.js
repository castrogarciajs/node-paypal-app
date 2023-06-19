import Express from "express";
import routesPayment from "./src/routes/payment_routes.js";
import cors from "cors";
import morgan from "morgan";
import path from "path";

const Application = Express();

Application.use(morgan("dev"));
Application.use(cors());
Application.use(Express.static(path.resolve("app/src/public")));
Application.use(routesPayment);

export default Application;
