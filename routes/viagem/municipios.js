const express = require("express");
const router = express.Router();

const Municipio = require("../../model/Municipios")


//@getAll
router.get('', (req, res) => {
    res.json(Municipio)
})

module.exports = router;