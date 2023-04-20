import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";

import AppBanner from "../appBanner/AppBanner";
import Spinner from "../spinner/Spinner";
import motionParams from "../../services/motionParams";

const ComicsList = lazy(() => import("../comicsList/ComicsList"));
const SingleComicPage = lazy(() => import("./singleComicPage/SingleComicPage"));

const ComicsPage = () => {
  return (
    <>
      <AppBanner />
      <Suspense fallback={<Spinner />}>
        <motion.div {...motionParams}>
          <Routes>
            <Route path="/" element={<ComicsList />} />
            <Route path=":comicId" element={<SingleComicPage />} />
          </Routes>
        </motion.div>
      </Suspense>
    </>
  );
};

export default ComicsPage;
