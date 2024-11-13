import { useParams } from "react-router-dom";
import MovieList from "../../2_Widget/MovieList";

const MovieListPage = () => {
  const {category} = useParams();
  return (
    <MovieList category={category}/>
  );
};

export default MovieListPage;