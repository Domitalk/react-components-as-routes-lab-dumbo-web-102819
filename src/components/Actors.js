import React from 'react';
import { actors } from '../data';

const mapAllMoviesForActors = (movies) => {
  return movies.map((movie) => {
    return <li>{movie}</li>
  })
}

const mapAllActors = () => {
  return actors.map((actor) => {
    return (
      <div>
        {actor.name}
        <ul>
          {mapAllMoviesForActors(actor.movies)}
        </ul>
      </div>
    )
  })
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {mapAllActors()}
    </div>
  );
};

export default Actors;
