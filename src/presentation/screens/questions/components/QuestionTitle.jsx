import { Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function QuestionTitle({ title }) {
  return <Heading>{title}</Heading>;
}

QuestionTitle.propTypes = {
  title: PropTypes.any,
};

export default QuestionTitle;
