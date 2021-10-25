const db = require('mongoose')
const dotenv = require("dotenv")
// db.connect("mongodb://localhost:27017/database", { useNewUrlParser: true },)
dotenv.config();

db.connect(process.env.MONGO_URL)
    .then(() => console.log("Database has connected"))
    .catch((err) => {
        console.log(err)
    })

module.exports = db;