import { Route, Routes } from "react-router-dom";

import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";
import { SingleComicPage } from './';

const ComicsPage = () => {
  return (
    <>
      <AppBanner/>
      <Routes>
        <Route path="/" element={<ComicsList/>}/>
        <Route path=":comicId" element={<SingleComicPage/>}/>
      </Routes>
    </>
  );
}

export default ComicsPage;
