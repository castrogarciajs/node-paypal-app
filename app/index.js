import Express from "express";

const Application = Express();
const PORT = 3000;

Application.listen(PORT);
console.log(`Server on port ${PORT}`);
