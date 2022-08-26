const router = require('express').Router()
const RequestModel = require('../models/Request');

router.get("/", async (req, res) => {
    try {
        const results = await RequestModel.find();
        res.status(200).json(results)
    } catch (error) {
        res.status(403).send('Error')
    }
})

router.post("/", async (req, res) => {
    const content = req.body
    try {
        const result = await RequestModel.create({ ...content });
        res.status(200).send('Ok')
    } catch (error) {
        res.status(403).send('Error')
    }

})


module.exports = router