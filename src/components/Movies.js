import React from 'react';
import { movies } from '../data';

const mapAllMovies = () => {
  // console.log(movies)
  return  movies.map((movie) => {
    return (
      <div>
        Title: {movie.title}
        <br></br>
        Time: {movie.time}
        <br></br>
        Genres: 
        <ul> 
          {mapAllGenres(movie.genres)}
        </ul>
      </div> 
    )
  })
  
}

const mapAllGenres = (genres) => {
  return genres.map((genre) => {
    return (
      <li>
        {genre}
      </li>
    )
  })
}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {mapAllMovies()}
    </div>
  );
};

export default Movies;


// {
//   title: 'Doctor Strange',
//   time: 115,
//   genres: ['Action', 'Adventure', 'Fantasy'],
//   metascore: 74
// }