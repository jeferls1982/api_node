const express = require("express");
const { sendStatus } = require("express/lib/response");
const Itinerario = require("../../model/Itinerario");

const router = express.Router();

const Viagem = require("../../model/Viagem")

//@getAll
router.get('', (req, res) => {
    Viagem.findAll()
        .then(viagem => {
            res.json(viagem)
        })
        .catch(e => {
            console.log(e);
        })
})

//@store
router.post('', (req, res) => {
    var { nome, descricao, date, user_id, origem, latitude, longitude } = req.body;
    Viagem.create({
            nome: nome,
            descricao: descricao,
            date: date,
            user_id: user_id,
            origem: origem,
            latitude: latitude,
            longitude: longitude
        })
        .then(() => {
            res.redirect('/viagem')
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
        Viagem.findOne({
                where: { id: id }
            })
            .then(viagem => {
                if (viagem != undefined) {
                    res.json(viagem);
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
        Viagem.findOne({
                where: { id: id }
            })
            .then(viagem => {
                if (viagem != undefined) {
                    var { nome, descricao, date, user_id, origem, latitude, longitude } = req.body;
                    Viagem.update({
                            nome: nome,
                            descricao: descricao,
                            date: date,
                            user_id: user_id,
                            origem: origem,
                            latitude: latitude,
                            longitude: longitude
                        }, {
                            where: { id: id }
                        })
                        .then(viagem => {
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
        Viagem.findOne({
                where: { id: id }
            })
            .then(viagem => {
                if (viagem != undefined) {
                    Viagem.destroy({
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


//@ viagens da pessoa
router.get('/pessoa/:id', (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        Viagem.findAll({
                where: { user_id: id }
            })
            .then(viagem => {
                if (viagem != undefined) {
                    res.json(viagem);
                } else {
                    res.sendStatus(404);
                }
            })
    }
})

//@ viagem itinerario
router.get('/itinerario/:id', (req, res) => {

    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        Itinerario.findAll({
                where: { viagem_id: id }
            })
            .then(viagem => {
                if (viagem != undefined) {
                    res.json(viagem);
                } else {
                    res.sendStatus(404);
                }
            })
    }
})

module.exports = router;