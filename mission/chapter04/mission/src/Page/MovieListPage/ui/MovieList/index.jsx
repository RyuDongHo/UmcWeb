import useMovieList from "./api/useMovieList";
import STYLE from "./style";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { handleNavigation } from "../../../../Shared/model/handleNavigate";
const MovieList = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  // page 전환 기능을 넣게 된다면 state로 관리합니다.
  const { category } = useParams();
  const [movieList] = useMovieList(category, page);
  if (!movieList) return null;
  return (
    <STYLE.MovieList>
      {movieList.map((elem, index) => {
        return (
          <STYLE.Movie
            className="movie"
            key={index}
            onClick={() => {
              handleNavigation(navigate, `/movie-detail/${elem.id}`);
            }}
          >
            <STYLE.Thumbnail src={`${elem.poster_path}`} alt="movie poster" />
            <STYLE.ThumbnailHoverEffectDiv />

            <STYLE.MovieInfo>
              <p>{elem.title}</p>
              <p>{elem.release_date}</p>
            </STYLE.MovieInfo>
          </STYLE.Movie>
        );
      })}
    </STYLE.MovieList>
  );
};

export default MovieList;
