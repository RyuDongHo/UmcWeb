import React from "react";
import { fetchRequest } from "../../../../../3_Shared/config/apiConfig";
const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const BASE_IMG_URL = "https://image.tmdb.org/t/p/";
const BASE_IMG_SIZE = "w500";

const useMovieList = (category, page) => {
  const [loading, setLoading] = React.useState(true);
  const [movieList, setMovieList] = React.useState([]);
  React.useEffect(() => {
    const fetchMovie = async () => {
      let result = await fetchRequest(
        "GET",
        `${BASE_URL}/movie/${category}?language=ko-KR&page=${page}`,
        null,
        API_TOKEN
      );
      result.results.forEach((e) => {
        e.poster_path = `${BASE_IMG_URL}${BASE_IMG_SIZE}${e.poster_path}`;
      });
      setMovieList((prevList) => [...prevList, ...result.results]);
      setLoading(false);
      console.log(page, "page")
    };

    fetchMovie();
  }, [category, page]);

  return [movieList, loading];
};
export default useMovieList;
