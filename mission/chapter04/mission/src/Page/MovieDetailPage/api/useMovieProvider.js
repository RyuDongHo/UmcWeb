// `${BASE_URL}/movie/${id}/watch/providers`,
import React from "react";
import fetchData from "../../../Shared/config/apiConfig";
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const BASE_IMG_URL = "https://image.tmdb.org/t/p/";
const BASE_IMG_SIZE = "original";

const useMovieProvider = (id) => {
  const [movieProvider, setmovieProvider] = React.useState([]);
  React.useEffect(() => {
    const fetchMovieProvier = async () => {
      let result = await fetchData(
        "GET",
        `${BASE_URL}/movie/${id}/watch/providers`
      );

      console.log(result);
      setmovieProvider(result);
    };

    fetchMovieProvier();
  }, [id]);
  return [movieProvider];
};
export default useMovieProvider;
