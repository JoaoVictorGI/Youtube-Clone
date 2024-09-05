import { config } from "dotenv"
import express from "express"
import { userRoutes } from "./routes/user.routes"
import { videosRoutes } from "./routes/videos.routes"

config()

const app = express()
const port = 4000

const cors = require("cors")

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	)
	res.header(
		"Access-Control-Allow-Methods",
		"POST, GET, PATCH, DELETE, OPTIONS"
	)
	next()
})

app.use(cors())

app.use(express.json())
app.use("/user", userRoutes)
app.use("/videos", videosRoutes)

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
