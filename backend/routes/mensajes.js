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
    try {
        const result = await MensajeModel.create({ ...content });
        res.status(200).send('Ok')
    } catch (error) {
        res.status(403).send('Error')
    }

})

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    try {
        await MensajeModel.findByIdAndDelete(id);
        res.status(200).json('ok')
    } catch (error) {
        res.status(403).send('Can\'t delete');
    }

})
module.exports = router