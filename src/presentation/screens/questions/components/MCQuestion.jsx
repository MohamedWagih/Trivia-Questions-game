import { Center, Grid, Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import Answers from './Answers';
import QuestionTitle from './QuestionTitle';

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
