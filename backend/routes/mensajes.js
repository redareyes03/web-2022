const router = require('express').Router()
const MensajeModel = require('../models/Mensaje');

router.get("/", async (req, res) => {
    try {
        const results = await MensajeModel.find();
        res.status(200).json(results)
    } catch (error) {
        res.status(403).send('Error')
    }
})

router.post("/", async (req, res) => {
    const content = req.body
    console.log(req)
    try {
        const result = await MensajeModel.create({ ...content });
        res.status(200).send('Ok')
    } catch (error) {
        res.status(403).send('Error')
    }

})

module.exports = router