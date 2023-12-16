import { Router } from "express";
import movieController from "../controllers/myController.js";

const myRouter = Router();

myRouter.get('/', movieController.showAllMovies);
myRouter.get('/:id', movieController.showOneMovie);
myRouter.post('/', movieController.createMovie);
myRouter.put('/:id', movieController.updateMovie);
myRouter.delete('/:id', movieController.deleteMovie);



export default myRouter;