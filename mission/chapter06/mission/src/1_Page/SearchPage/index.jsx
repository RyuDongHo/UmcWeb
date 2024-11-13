import { handleNavigation } from "../../3_Shared/model/handleNavigate";
import { useNavigate } from "react-router-dom";
import MovieList from "../../2_Widget/MovieList";
import React from "react";
const SearchPage = ()=>{
  const navigate = useNavigate();
  const keyword = React.useRef("");
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        handleNavigation(navigate, `/search?keyword=${keyword.current.value}`)}}>
        <input type="text" ref={keyword}/>
      </form>
      <MovieList />
    </div>
  )
}

export default SearchPage;