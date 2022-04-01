const express = require("express");
const { sendStatus } = require("express/lib/response");
const router = express.Router();

const Pessoa = require("../../model/Pessoa")

//@getAll
router.get('', (req, res) => {
    Pessoa.findAll()
        .then(pessoa => {
            res.json(pessoa)
        })
        .catch(e => {
            console.log(e);
        })
})

//@store
router.post('', (req, res) => {
    var { nome, email, telefone } = req.body;
    Pessoa.create({
            nome: nome,
            email: email,
            telefone: telefone
        })
        .then(() => {
            res.redirect('/contato')
        }).catch((e) => {
            console.log(e)
        })
})

//@show
router.get('/:id', (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        Pessoa.findOne({
                where: { id: id }
            })
            .then(pessoa => {
                if (pessoa != undefined) {
                    res.json(pessoa);
                } else {
                    res.sendStatus(404);
                }
            })
    }
})

//@update
router.put("/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        Pessoa.findOne({
                where: { id: id }
            })
            .then(pessoa => {
                if (pessoa != undefined) {
                    var { nome, email, telefone } = req.body;
                    Pessoa.update({
                            nome: nome,
                            email: email,
                            telefone: telefone
                        }, {
                            where: { id: id }
                        })
                        .then(pessoa => {
                            res.sendStatus(200);
                        })
                        .catch((e) => {
                            console.log(e)
                        })

                } else {
                    res.sendStatus(404);
                }
            })
    }
})

//@destroy
router.delete("/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        Pessoa.findOne({
                where: { id: id }
            })
            .then(pessoa => {
                if (pessoa != undefined) {
                    Pessoa.destroy({
                            where: { id: id }
                        })
                        .then(() => {
                            res.sendStatus(200);
                        })
                } else {
                    res.sendStatus(404);
                }
            })
    }
})




module.exports = router;