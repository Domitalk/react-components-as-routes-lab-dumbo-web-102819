import React from 'react';
import { directors } from '../data';


const mapAllMoviesForDirector = (movies) => {
  return movies.map((movie) => {
    return (
      <li>
        {movie}
      </li>
    )
  })
}


const mapAllDirectors = () => {
  return directors.map((director) => {
    return (
      <div>
        Director: {director.name}
        <br></br>
        Movies: 
        <br></br>
        <ul>
          {mapAllMoviesForDirector(director.movies)}
        </ul>
      </div>
    )
  })
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {mapAllDirectors()}
    </div>
  );
}

export default Directors
