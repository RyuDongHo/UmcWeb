import useMovieList from "./api/useMovieList";
import STYLE from "./style";
import React from "react";

const MovieList = (props) => {
  const [page, setPage] = React.useState(1);
  // page 전환 기능을 넣게 된다면 state로 관리합니다.
  const { category } = props;
  const [movieList] = useMovieList(category, page);
  if (!movieList) return null;
  return (
    <STYLE.MovieList>
      {movieList.map((elem, index) => {
        return (
          <STYLE.Movie className="movie" key={index}>
            <STYLE.Thumbnail
              src={`${elem.poster_path}`}
              alt="movie poster"
            />
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
