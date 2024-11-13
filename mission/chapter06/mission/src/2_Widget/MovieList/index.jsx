import useMovieList from "./api/useMovieList";
import STYLE from "./style";
import React from "react";
import Movie from "./ui/Movie"
import { useParams, useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
const MovieList = () => {
  const [page, setPage] = React.useState(1);
  const { category } = useParams();

  // 쿼리 문자열 가져오기
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const isSearch = !category && !!keyword;
  const [movieList, loading] = useMovieList(isSearch? keyword : category, page, isSearch);
  

  const { ref, inView } = useInView({
    threshold: 0,
  });

  React.useEffect(() => {
    if (inView && !loading) {
      setPage((prev) => prev + 1);
    }
  }, [inView, loading]);

  if (loading) return <div>still loading...</div>; // API loading

  return (
    <STYLE.MovieList>
      {movieList.map((elem, index) => {
        return (
          <Movie
            observe={index === movieList.length - 1 ? ref : null}
            key={index}
            data={elem}
          />
        );
      })}
      {loading && <div>Loading more movies...</div>}
    </STYLE.MovieList>
  );
};
MovieList.displayName = "MovieList";

export default MovieList;
