import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';

import motionParams from '../../services/motionParams';

const SinglePage = ({ Component, dataType }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { loading, error, getCharacter, getComic, clearError } =
    useMarvelService();
  console.log(useParams());

  useEffect(() => {
    updateData();
    // eslint-disable-next-line
  }, [id]);

  const updateData = () => {
    clearError();

    switch (dataType) {
      case 'comic':
        getComic(id).then(onDataLoaded);
        break;
      case 'character':
        getCharacter(id).then(onDataLoaded);
        break;
      default:
        break;
    }
  };

  const onDataLoaded = (data) => {
    setData(data);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !data) ? (
    <Component data={data} />
  ) : null;

  return (
    <motion.div {...motionParams}>
      {errorMessage}
      {spinner}
      {content}
    </motion.div>
  );
};

export default SinglePage;
