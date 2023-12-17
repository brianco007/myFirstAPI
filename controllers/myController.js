
import movieModel from '../models/myModel.js'; 

const movieController = {
  showAllMovies: async (req, res)=>{
    try {
      const allMovies = await movieModel.find(); 
      res.json(allMovies)
    } catch (error) {
        res.json({message: 'Movies couldnt\'t be loaded. Try again later.'})
    }
  },

  showOneMovie: async (req, res)=>{
    try {
      const oneMovie = await movieModel.findById(req.params.id);
      res.json(oneMovie);
    } catch (error) {
        res.json({message: 'Movie couldnt\'t be loaded. Try again later.'})
    }
  },

  createMovie: async (req, res)=>{
    try{
      const newMovie = new movieModel(req.body);//create a movie to send on Pm
      const createdMovie = await newMovie.save(); // save movie in MongoDB
      console.log(createdMovie);
      if(createdMovie._id){
        res.json({message: 'Movie has been added to the list.'});
      }
    } catch (error) {
      res.json({message: "It wasn't possible to create this movie. Make sure all the fields marked as required are complete and have the right name."})
    }
  },

  updateMovie: async (req, res)=>{
    try{
      const newMovieInfo = await movieModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.json({movie: 'The film information has been updated succesfully.'})
    } catch (error) {
      res.json({message: "It wasn't possible to update the movie information. Make sure all the fields marked as required are complete."})
    }
  },

  deleteMovie: async (req, res)=>{
    try{
      const movieToDelete = await movieModel.findByIdAndDelete(req.params.id);
      res.json({movie: 'The film has been deleted from the list.'})
    } catch (error) {
      res.json({message: "It wasn't possible to delete the movie. Make sure you provide a valid ID."})
    }
  }
}

export default movieController;