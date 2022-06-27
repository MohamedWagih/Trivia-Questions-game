import { Box, Button, Center, Heading, Stack } from '@chakra-ui/react';
import { useAppStore } from 'application/store';
import { secToHMS } from 'infrastructure/utils';
import Chart from 'react-apexcharts';
import { useNavigate } from 'react-router-dom';

function Score() {
  const navigate = useNavigate();

  const playerName = useAppStore((store) => store.playerName);
  const totalPlayedTime = useAppStore((store) => store.totalPlayedTime);
  const score = useAppStore((store) => store.score);

  return (
    <Center h="100vh">
      <Stack gap={24}>
        <Center>
          <Heading>{playerName}</Heading>
        </Center>
        <Center w="100%">
          <Stack direction="row" gap={24}>
            <Box bg="gray.300" padding={12}>
              <Center>
                <Stack>
                  <Heading textAlign="center" as="h3" size="lg">
                    Time
                  </Heading>
                  <Heading as="h3" size="lg">
                    {secToHMS(totalPlayedTime)}
                  </Heading>
                </Stack>
              </Center>
            </Box>
            <Box bg="gray.300" padding={12}>
              <Chart
                type="pie"
                width="380"
                options={{
                  labels: ['correct', 'wrong', 'skipped'],
                }}
                series={[score.correct, score.wrong, score.skipped]}
              />
            </Box>
          </Stack>
        </Center>
        <Center>
          <Button onClick={() => navigate('/')}>New Game</Button>
        </Center>
      </Stack>
    </Center>
  );
}

export default Score;
