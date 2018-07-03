const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-sample.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => res.json({ message: "Welcome to express!" }));

app.listen(PORT, () => console.log(`Server started on port ${PORT}…`));
