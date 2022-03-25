const express = require("express");
const router = express.Router();

const Game = require("../database/Game");

//@getAll
router.get('', (req, res) => {
    Game.findAll().then(games => {
        res.statusCode = 200;
        res.json(games);
    })

})

//@show
router.get('/:id', (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        Game.findOne({
            where: { id: id }
        }).then(game => {
            if (game != undefined) {
                res.statusCode = 200;
                res.json(game);
            } else {
                res.sendStatus(404);
            }
        })


    }
});

//@store
router.post('', (req, res) => {
    var { nome } = req.body;

    Game.create({
        nome: nome
    }).then(() => {
        res.redirect('/games')
    })



});


//@destroy
router.delete("/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        Game.findOne({
            where: { id: id }
        }).then(game => {
            if (game != undefined) {
                Game.destroy({
                    where: { id: id }
                }).then(() => {
                    res.sendStatus(200);

                });

            } else {
                res.sendStatus(404);
            }
        })
    }
});


//@update
router.put("/:id", (req, res) => {

    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);

        Game.findOne({
            where: { id: id }
        }).then(game => {
            if (game != undefined) {
                var { nome } = req.body;
                if (nome != undefined) {
                    Game.update({ nome: nome }, { where: { id: id } }).then(() => {
                        res.sendStatus(200);
                    })
                }

            } else {
                res.sendStatus(404);
            }
        })
    }
});




module.exports = router;