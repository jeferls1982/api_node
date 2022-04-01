const express = require("express");
const { sendStatus } = require("express/lib/response");
const router = express.Router();

const Itinerario = require("../../model/Itinerario")

//@getAll
router.get('', (req, res) => {
    Itinerario.findAll()
        .then(Itinerario => {
            res.json(Itinerario)
        })
        .catch(e => {
            console.log(e);
        })
})

//@store
router.post('', (req, res) => {
    var { viagem_id, cidade, estado, latitude, longitude } = req.body;
    Itinerario.create({
            viagem_id: viagem_id,
            cidade: cidade,
            estado: estado,
            latitude: latitude,
            longitude: longitude
        })
        .then(() => {
            res.redirect('/itinerario')
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
            Itinerario.findOne({
                    where: { id: id }
                })
                .then(itinerario => {
                    if (itinerario != undefined) {
                        res.json(itinerario);
                    } else {
                        res.sendStatus(404);
                    }
                })
        }
    }),


    //@update
    router.put("/:id", (req, res) => {
        if (isNaN(req.params.id)) {
            res.sendStatus(400);
        } else {
            var id = parseInt(req.params.id);
            Itinerario.findOne({
                    where: { id: id }
                })
                .then(itinerario => {
                    if (itinerario != undefined) {
                        var { viagem_id, cidade, estado, latitude, longitude } = req.body;
                        Itinerario.update({
                                viagem_id: viagem_id,
                                cidade: cidade,
                                estado: estado,
                                latitude: latitude,
                                longitude: longitude
                            }, {
                                where: { id: id }
                            })
                            .then(itinerario => {
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
        Itinerario.findOne({
                where: { id: id }
            })
            .then(itinerario => {
                if (itinerario != undefined) {
                    Itinerario.destroy({
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