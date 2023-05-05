import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

import AppBanner from '../appBanner/AppBanner';
import Spinner from '../spinner/Spinner';
import motionParams from '../../services/motionParams';

const ComicsList = lazy(() => import('../comicsList/ComicsList'));
const SinglePage = lazy(() => import('./SinglePage'));
const SingleComicLayout = lazy(() =>
  import('./singleComicLayout/SingleComicLayout'),
);

const ComicsPage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page with list of our comics" />
        <title>Comics page</title>
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <motion.div {...motionParams}>
          <AppBanner />
          <Routes>
            <Route path="/" element={<ComicsList />} />
            <Route
              path=":id"
              element={
                <SinglePage Component={SingleComicLayout} dataType="comic" />
              }
            />
          </Routes>
        </motion.div>
      </Suspense>
    </>
  );
};

export default ComicsPage;
