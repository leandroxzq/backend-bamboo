import express from "express"
import cors from "cors"
import routes from "./routes/routes.js"

const app = express()

app.use(express.json())
app.use(
	cors({
		origin: "https://bamboo-rho.vercel.app",
	})
)

app.use("/", routes)

app.use("/uploads", express.static("uploads"))

const port = 5000

app.listen(process.env.PORT || port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})
