import PropTypes from 'prop-types';
import React from 'react';
import QuestionTitle from './QuestionTitle';
import { Box, Stack, Center } from '@chakra-ui/react';

function TFQuestion({ title }) {
  return (
    <Stack gap={12}>
      <QuestionTitle title={title} />
      <Center>
        <Stack direction="row" gap={48}>
          <Box bg="gray.300" padding={6} borderRadius={3} cursor="pointer">
            True
          </Box>
          <Box bg="gray.300" padding={6} borderRadius={3} cursor="pointer">
            False
          </Box>
        </Stack>
      </Center>
    </Stack>
  );
}

TFQuestion.propTypes = {
  title: PropTypes.string,
};

export default TFQuestion;
