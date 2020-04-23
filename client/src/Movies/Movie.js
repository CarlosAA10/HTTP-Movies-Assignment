import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";

function Movie({ addToSavedList }, props) {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const { push } = useHistory(); 

  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => {
        setMovie(res.data); 
        console.log('res.data in movie.js', res.data); 
      })
      .catch((err) => console.log(err.response));
  };

  const theMovie = movie.find(
    film => `${film.id}` === props.match.params.id
  ); 

  const saveMovie = () => {
    addToSavedList(movie);
  };

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />

      <div className="save-button" onClick={saveMovie}>
        Save
      </div><br/>
      <button onClick={() => push(`/update-movie/${theMovie.id}`)}>Update Movie</button>
    </div>
  );
}

export default Movie;
