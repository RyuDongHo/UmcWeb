import React from "react";
import {useParams} from "react-router-dom"
import useMovieDetail from "./api/useMovieDetail";

const MovieDetailPage = () => {
  const { id } = useParams();
  useMovieDetail(id);
  return(
    <div>123</div>
  )
};

export default MovieDetailPage;
