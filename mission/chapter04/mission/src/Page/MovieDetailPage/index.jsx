import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetail from "./api/useMovieDetail";
import STYLE from "./style";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movieInfo, loading] = useMovieDetail(id);
  if (loading) return <div>still loading...</div>;
  return (
    <STYLE.MovieDetail>
      <STYLE.MovieBanner backgroundImg={movieInfo.backdrop_path}>
        {/* movieInfo.poster_path */}
        <h3>{movieInfo.title}</h3>
        <p>{movieInfo.vote_average}점</p>
        <p>{movieInfo.runtime}분</p>
      </STYLE.MovieBanner>

      <STYLE.MovieInfoContainer>
        {movieInfo.map}
      </STYLE.MovieInfoContainer>
    </STYLE.MovieDetail>
  );
};

export default MovieDetailPage;
