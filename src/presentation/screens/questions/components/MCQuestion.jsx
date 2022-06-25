import PropTypes from 'prop-types';
import React from 'react';
import QuestionTitle from './QuestionTitle';
import { Stack, Center, Grid } from '@chakra-ui/react';
import Answers from './Answers';

function MCQuestion({ title, answers = [] }) {
  return (
    <Stack gap={12}>
      <QuestionTitle title={title} />
      <Center>
        <Grid width="100%" templateColumns="repeat(2, 1fr)" gap={12}>
          <Answers answers={answers} />
        </Grid>
      </Center>
    </Stack>
  );
}

MCQuestion.propTypes = {
  answers: PropTypes.array,
  title: PropTypes.string,
};

export default MCQuestion;
