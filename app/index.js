const express = require("express")
const app = express()
const server = require("http").createServer(app)
const path = require("path")
const mongoose = require("mongoose")
const cors = require("cors")
const router = require("./routes/router")

class Application {
    constructor() {
        this.serverConfig()
        this.databaseConfig()
        this.middlewareConfig()
        this.routerConfig()
    }

    serverConfig() {
        server.listen(process.env.PORT, () => {
            console.log(`server listen on port ${process.env.PORT}`)
        })
    }

    databaseConfig() {
        mongoose.connect(process.env.DB_URL)
            .then((res) => { console.log("connect to mongodb") })
            .catch((err) => { console.log(err) })
    }

    middlewareConfig() {
        app.use(express.static(path.join(__dirname, "public")))
        app.use(express.json())
        app.use(cors())
    }

    routerConfig() {
        app.use("/", router)
    }
}

module.exports = new Application()