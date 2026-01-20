import { initDB } from "./db/init"; 
import { getAllMovies, getMovieById , getMovieByTitle} from "./models/movies";


const db = await initDB()
//const movies = getAllMovies(db)
//console.log(movies)
//const peliculas = getMovieById(db, 1)
//console.log(peliculas)
const peliculas = getMovieByTitle(db, "Toy ")
console.log(peliculas)