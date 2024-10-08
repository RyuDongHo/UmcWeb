import MovieListPage from "./MovieListPage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import SearchPage from "./SearchPage";
import CategoryPage from "./CategoryPage";
import { Routes, Route } from "react-router-dom";
import STYLE from "./style";
import Sidebar from "./ui/Sidebar";
const Page = () => {
  return (
    <STYLE.Main>
      <Sidebar />
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
    </STYLE.Main>
  );
};

export default Page;