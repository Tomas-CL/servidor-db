import { initDB } from "./db/init";
import { getMovies, insertMovies } from "./models/movies";
import express from "express"
import type { Request, Response, NextFunction } from "express";
import { redis } from "bun";

const app = express();
const PORT = 3000

const db = await initDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.method, req.url, new Date().toDateString())
    if (req.method === "GET") {
        console.log(req.query)
    } if (req.method === "POST") {
        console.log(req.query)
    }
    next()
}

app.use(logMiddleware)

// --------------GET /movies
app.get("/movies",  async (req: Request, res: Response) => {
    const { title, genres } = req.query
    const filters = {
        title: typeof title === "string" ? title : undefined,
        genres: typeof genres === "string" ? genres : undefined
    }

    const cacheKey = `movies:${JSON.stringify(filters)}`
    const cached = await redis.get(cacheKey)
    if (cached) {
        console.log("Respuesta cacheada, puede tener datos desactualizados")
        return res.json(JSON.parse(cached))
    }

    console.log("Refrescando cache")
    const movies = getMovies(db, filters)

    await redis.set(cacheKey, JSON.stringify(movies), "EX", 30)
    res.json(movies)
})

app.post("/movies", (req: Request, res: Response) => {
    const { title, genres } = req.body
    const respuesta = insertMovies(db, title, genres)
    res.json(respuesta)
})
app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`)
})