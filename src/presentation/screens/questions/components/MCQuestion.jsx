import PropTypes from 'prop-types';
import React from 'react';
import QuestionTitle from './QuestionTitle';
import { Stack, Center, Grid, GridItem } from '@chakra-ui/react';

function MCQuestion({ title, answers = [] }) {
  return (
    <Stack gap={12}>
      <QuestionTitle title={title} />
      <Center>
        <Grid width="100%" templateColumns="repeat(2, 1fr)" gap={12}>
          {answers.map((answer) => (
            <GridItem key={answer} cursor="pointer" width="100%" height="90px" bg={'gray.300'}>
              <Center h="100%">{answer}</Center>
            </GridItem>
          ))}
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
