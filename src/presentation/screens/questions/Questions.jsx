import React, { useState } from 'react';
import { Button, ButtonGroup, Center, Heading, Stack } from '@chakra-ui/react';
import Question from './components/Question';
import { useAppStore } from 'application/store';
import { useNavigate } from 'react-router-dom';

function Questions() {
  const navigate = useNavigate();
  const timerLimit = useAppStore((state) => state.timerCount);
  const [timerCount, setTimerCount] = useState(timerLimit);

  React.useEffect(() => {
    timerCount > 0 && setTimeout(() => setTimerCount(timerCount - 1), 1000);
    if (timerCount === 0) {
      navigate('/score');
    }
  }, [timerCount]);

  return (
    <Center flexDirection="column" h="100vh">
      <Heading>{timerCount}</Heading>
      <Stack width="60%" direction="column" gap={24}>
        <Center>
          {/* <Question title="The Alps are a mountain range on which continent?" type="TF" /> */}
          <Question
            title="The Alps are a mountain range on which continent?"
            type="MCQ"
            answers={[1, 2, 3, 4]}
          />
        </Center>
        <Center>
          <ButtonGroup width="100%" flexDirection="row" justifyContent="space-around">
            <Button>Skip</Button>
            <Button onClick={() => navigate('/score')}>Next</Button>
          </ButtonGroup>
        </Center>
      </Stack>
    </Center>
  );
}

export default Questions;
