import React from 'react';
import { Box, Center, Input, Grid, Button, RadioGroup, Stack, Radio } from '@chakra-ui/react';
import { useAppStore } from 'application/store';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const setPlayerName = useAppStore((store) => store.setPlayerName);
  const difficulty = useAppStore((store) => store.difficulty);
  const setDifficulty = useAppStore((store) => store.setDifficulty);
  const navigate = useNavigate();

  return (
    <Center h="100vh">
      <Grid templateColumns="repeat(1, 1fr)" gap={6}>
        <Box bg="gray.300" width="600px" borderRadius="10px" p={4}>
          <Center h="100%">
            <Grid width="100%" templateColumns="repeat(1, 1fr)" padding="20px" gap={6}>
              <Input
                _placeholder={{ color: 'inherit' }}
                placeholder="Player Name"
                size="lg"
                onChange={(e) => setPlayerName(e.target.value)}
              />
              <RadioGroup onChange={(value) => setDifficulty(value)} value={difficulty}>
                <Stack direction="row">
                  <Radio value="easy">Easy</Radio>
                  <Radio value="mid">Medium</Radio>
                  <Radio value="hard">Hard</Radio>
                </Stack>
              </RadioGroup>
            </Grid>
          </Center>
        </Box>
        <Button onClick={() => navigate('/categories')}>PLAY</Button>
      </Grid>
    </Center>
  );
}

export default Welcome;
