import Application from "./app.js";
import { PORT } from "../setup.js";

Application.listen(PORT);
console.log(`Server on port ${PORT}`);
