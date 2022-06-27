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
  const questionsTimes = useAppStore((store) => store.questionsTimes);

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
                  <Heading textAlign="center" as="h4" size="md">
                    Total Time Played
                  </Heading>
                  <Heading as="h3" size="lg">
                    {secToHMS(totalPlayedTime)}
                  </Heading>
                </Stack>
              </Center>
            </Box>
            <Box bg="gray.300" padding={12}>
              <Center width="100%">
                <Stack gap={6}>
                  <Heading textAlign="center" as="h4" size="md">
                    Answers Ratio
                  </Heading>
                  <Chart
                    type="pie"
                    width="380"
                    options={{
                      labels: ['correct', 'wrong', 'skipped'],
                    }}
                    series={[score.correct, score.wrong, score.skipped]}
                  />
                </Stack>
              </Center>
            </Box>
            <Box bg="gray.300" padding={12}>
              <Center width="100%">
                <Stack gap={6}>
                  <Heading textAlign="center" as="h4" size="md">
                    Question Time
                  </Heading>
                  <Chart
                    type="line"
                    width="380"
                    options={{
                      chart: {
                        id: 'questions-time',
                      },
                    }}
                    series={[
                      {
                        name: 'question-time',
                        data: questionsTimes,
                      },
                    ]}
                  />
                </Stack>
              </Center>
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
