import React, { useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/react';
import { useAppStore } from 'application/store';

function Timer() {
  const timerLimit = useAppStore((state) => state.timerLimit);
  const [timerCount, setTimerCount] = useState(timerLimit);

  useEffect(() => {
    timerCount > 0 && setTimeout(() => setTimerCount(timerCount - 1), 1000);
    if (timerCount === 0) {
      //   navigate('/score');
    }
  }, [timerCount]);
  return <Heading color={timerCount < 15 ? 'red.500' : 'black'}>{timerCount}</Heading>;
}

export default Timer;
