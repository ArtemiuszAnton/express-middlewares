const express = require('express');
const { getAllUser, getUserById, createNewUser, updateUser, deleteUser, changeName } = require('../service/user.service')
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

router.put('/:id', (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const { id } = req.params
        const updateData = updateUser(id, name, surname, email, pwd)
        res.status(200).send(updateData)
    } catch (er) {
        res.status(404).send(er.message)

    }
})

router.delete('/:id', (req, res) => {
    try {
        const { id } = req.params
        const delUser = deleteUser(id);
        res.status(200).send(delUser)

    } catch (er) {
        res.status(404).send(er.message)

    }
})

router.patch('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const changetName = changeName(id, body)
        res.status(200).send(changetName)

    } catch (er) {
        res.status(404).send(er.message)
    }
})

module.exports = { router } 