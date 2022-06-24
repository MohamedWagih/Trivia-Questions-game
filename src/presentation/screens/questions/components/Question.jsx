import PropTypes from 'prop-types';
import React from 'react';
import MCQuestion from './MCQuestion';
import TFQuestion from './TFQuestion';

function Question({ type, title, answers = [] }) {
  if (type === 'TF') {
    return <TFQuestion title={title} />;
  }
  if (type === 'MCQ') {
    return <MCQuestion title={title} answers={answers} />;
  }
  return 'Unsupported type of question!';
}

Question.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['TF', 'MCQ']).isRequired,
  answers: PropTypes.array,
};

export default Question;
