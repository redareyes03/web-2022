const mongoose = require('mongoose')
const pass = "rdrdrd0103"
const uri = `mongodb+srv://redareyes:${pass}@freelancecluster.azldu.mongodb.net/app?retryWrites=true&w=majority`

mongoose.connect(uri)