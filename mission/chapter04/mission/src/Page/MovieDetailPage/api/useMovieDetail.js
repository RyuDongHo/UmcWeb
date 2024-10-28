import React from "react";
import apiConfig from "../../../Shared/config/apiConfig";
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const BASE_IMG_URL = "https://image.tmdb.org/t/p/";
const BASE_IMG_SIZE = "w500";

const useMovieDetail = (id) => {
  const [movieList, setMovieList] = React.useState([]);
  React.useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `${BASE_URL}/movie/${id}?language=ko-KR`,
        apiConfig("GET"),
      );

      let result = [];
      const status = response.status;
      switch (status) {
        case 200:
          result = await response.json();
          break;
        default:
          alert("api error");
          result = null;
          break;
      }
      console.log(result)
      // result.forEach(e => {
      //   console.log(e)
      //   e.poster_path = `${BASE_IMG_URL}${BASE_IMG_SIZE}${e.poster_path}`;
      // });
    
      setMovieList(result);
    };

    fetchMovie();
  }, [id]);

  return [movieList.results];
};
export default useMovieDetail;
