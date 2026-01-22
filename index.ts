import { initDB } from "./db/init";
import { getAllMovies, getMovieById, getMovieByTitle } from "./models/movies";
import express from "express"
import type { Request, Response, NextFunction } from "express";

const app = express();
const PORT = 3000
const db = await initDB()

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.method, req.url, new Date().toDateString())
    if (req.method === "GET") {
        console.log(req.query)
    }
    next()
}

app.use(logMiddleware)

app.get("/movies", (req: Request, res: Response) => {
    const title = req.query.title
    if (title) {
        const peliculas = getMovieByTitle(db, title)
        res.json(peliculas)
    } else {
        const peliculas = getAllMovies(db)
        res.json(peliculas)

    }
})

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`)
})