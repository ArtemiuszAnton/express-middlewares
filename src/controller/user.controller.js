const express = require('express');
const { getAllUser, getUserById, createNewUser } = require('../service/user.service')
const router = express.Router();

router.get('/', (req, res, next) => {
    try {
        res.status(200).send(getAllUser())
    } catch (er) {
        res.status(404).send(er.message)
    }
})

router.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        res.status(200).send(getUserById(id))
    } catch (er) {
        res.status(404).send(er.message)
    }
})


router.post('/', (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        console.log(req);
        const newUser = createNewUser(name, surname, email, pwd);
        res.status(200).send(newUser)
    } catch (er) {
        res.status(404).send(er.message)
    }
})


module.exports = { router } 