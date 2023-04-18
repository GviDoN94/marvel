import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import AppBanner from "../appBanner/AppBanner";
import Spinner from "../spinner/Spinner";

const ComicsList = lazy(() => import('../comicsList/ComicsList'));
const SingleComicPage = lazy(() => import('./singleComicPage/SingleComicPage'));

const ComicsPage = () => {
  return (
    <>
      <AppBanner/>
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route path="/" element={<ComicsList/>}/>
          <Route path=":comicId" element={<SingleComicPage/>}/>
        </Routes>
      </Suspense>
    </>
  );
}

export default ComicsPage;
