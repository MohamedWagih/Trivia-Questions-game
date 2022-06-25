import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/react';
import { useAppStore } from 'application/store';

function Timer({ skipQuestion }) {
  const timerCount = useAppStore((state) => state.timerCount);
  const setTimerCount = useAppStore((state) => state.setTimerCount);

  useEffect(() => {
    const counterInterval = setInterval(() => setTimerCount(timerCount - 1), 1000);
    if (timerCount === 0) {
      skipQuestion();
    }
    return () => {
      clearInterval(counterInterval);
    };
  }, [timerCount]);

  return <Heading color={timerCount < 15 ? 'red.500' : 'black'}>{timerCount}</Heading>;
}

Timer.propTypes = {
  skipQuestion: PropTypes.func,
};

export default Timer;
