import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Center, GridItem } from '@chakra-ui/react';
import { useAppStore } from 'application/store';

function Answers({ answers }) {
  const selectedAnswer = useAppStore((store) => store.selectedAnswer);
  const setSelectedAnswer = useAppStore((store) => store.setSelectedAnswer);

  useEffect(() => {
    setSelectedAnswer('');
  }, []);

  return (
    <>
      {answers.map((answer) => (
        <GridItem
          key={answer}
          cursor="pointer"
          width="100%"
          height="90px"
          onClick={() => setSelectedAnswer(answer)}
          bg={selectedAnswer === answer ? 'gray.500' : 'gray.300'}>
          <Center h="100%">{answer}</Center>
        </GridItem>
      ))}
    </>
  );
}

Answers.propTypes = {
  answers: PropTypes.shape({
    map: PropTypes.array,
  }),
};

export default Answers;
