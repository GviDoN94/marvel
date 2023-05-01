import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import ErrorMessage from '../errorMessage/ErrorMessage';

import motionParams from '../../services/motionParams';

const Page404 = () => {
  return (
    <motion.div {...motionParams}>
      <ErrorMessage />
      <p
        style={{
          textAlign: 'center',
          'font-weight': 'bold',
          'font-size': '24px',
        }}
      >
        Page doesn't exist
      </p>
      <Link
        style={{
          textAlign: 'center',
          display: 'block',
          marginTop: '30px',
          fontWeight: 'bold',
          fontSize: '24px',
        }}
        to="/"
      >
        Back to main page
      </Link>
    </motion.div>
  );
};

export default Page404;
