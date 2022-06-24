import React from 'react';
import { Button, ButtonGroup, Center, Heading, Stack } from '@chakra-ui/react';
import Question from './components/Question';
import { useAppStore } from 'application/store';

function Questions() {
  const timerCount = useAppStore((state) => state.timerCount);
  const setTimerCount = useAppStore((state) => state.setTimerCount);

  React.useEffect(() => {
    timerCount > 0 && setTimeout(() => setTimerCount(timerCount - 1), 1000);
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
            <Button>Next</Button>
          </ButtonGroup>
        </Center>
      </Stack>
    </Center>
  );
}

export default Questions;
