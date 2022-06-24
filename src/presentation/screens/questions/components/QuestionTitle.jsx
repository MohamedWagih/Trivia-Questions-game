import PropTypes from 'prop-types';
import React from 'react';
import { Heading } from '@chakra-ui/react';

function QuestionTitle({ title }) {
  return <Heading>{title}</Heading>;
}

QuestionTitle.propTypes = {
  title: PropTypes.any,
};

export default QuestionTitle;
