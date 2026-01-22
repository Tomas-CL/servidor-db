import { initDB } from "./db/init";
import { Database } from "bun:sqlite"
import { getMoviesByTitleAndGenre, getMoviesByGenre } from "./models/movies";

const db: Database = await initDB()
const m1 = getMoviesByTitleAndGenre(db, "toy", "comedy")
console.log(m1)