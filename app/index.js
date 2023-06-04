import Express from "express";
import routesPayment from "./routes/payment_routes.js";

const Application = Express();
const PORT = 3000;

Application.use(routesPayment);

Application.listen(PORT);
console.log(`Server on port ${PORT}`);
