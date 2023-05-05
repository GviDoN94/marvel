import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import motionParams from '../../services/motionParams';

const SinglePage = ({ Component, dataType }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { process, setProcess, getCharacter, getComic, clearError } =
    useMarvelService();

  useEffect(() => {
    updateData();
    // eslint-disable-next-line
  }, [id]);

  const updateData = () => {
    clearError();

    switch (dataType) {
      case 'comic':
        getComic(id)
          .then(onDataLoaded)
          .then(() => setProcess('confirmed'));
        break;
      case 'character':
        getCharacter(id)
          .then(onDataLoaded)
          .then(() => setProcess('confirmed'));
        break;
      default:
        break;
    }
  };

  const onDataLoaded = (data) => {
    setData(data);
  };

  return (
    <motion.div {...motionParams}>
      {setContent(process, Component, data)}
    </motion.div>
  );
};

export default SinglePage;
