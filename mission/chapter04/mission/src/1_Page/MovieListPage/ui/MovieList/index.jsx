import useMovieList from "./api/useMovieList";
import STYLE from "./style";
import React from "react";
import Movie from "./ui/Movie";
import useThrottle from "../../../../3_Shared/lib/useThrottle";
import { useParams } from "react-router-dom";
const MovieList = () => {
  const { category } = useParams();
  const [page, setPage] = React.useState(1);
  const [movieList, loading] = useMovieList(category, page);

  const observer = React.useRef();
  const observerFunc = useThrottle((node) => {
    if (loading) return;
    console.log(node);
    
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting ) {
        setPage((prevPage) => prevPage + 1)
         // 페이지 증가
      }
    });
    if (node) observer.current.observe(node);

  }, 1000)

  
  if (loading) return <div>still loading...</div>; // API loading

  return (
    <STYLE.MovieList>
      {movieList.map((elem, index) => {
        return (
          <Movie
            observerFunc={
              index === movieList.length - 1 ? observerFunc : null
            }
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
