const routes = require("express").Router();

const currencyConversion = require("./app/controllers/currencyConversion");

routes.get("/currency", currencyConversion.convert);

routes.get("/dashboard", (req, res) => {
    return res.status(401).json({ message: "aqui foi" });
});

module.exports = routes;