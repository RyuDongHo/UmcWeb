import React from "react";
import fetchData from "../../../Shared/config/apiConfig";
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const BASE_IMG_URL = "https://image.tmdb.org/t/p/";
const BASE_IMG_SIZE = "original";

const useMovieDetail = (id) => {
  const [loading, setLoading] = React.useState(true);
  const [movieDetail, setmovieDetail] = React.useState([]);
  React.useEffect(() => {
    const fetchMovie = async () => {
      let result = await fetchData(
        "GET",
        `${BASE_URL}/movie/${id}?language=ko-KR`
      );

      result.backdrop_path = `${BASE_IMG_URL}${BASE_IMG_SIZE}${result.backdrop_path}`;
      setmovieDetail(result);
      setLoading(false);
    };

    fetchMovie();
  }, [id]);
  return [movieDetail, loading];
};
export default useMovieDetail;
