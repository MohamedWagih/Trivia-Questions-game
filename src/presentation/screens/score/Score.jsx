import React from 'react';
import { Center, Heading, Stack, Box, Button } from '@chakra-ui/react';
import { useAppStore } from 'application/store';
import { useNavigate } from 'react-router-dom';

function Score() {
  const navigate = useNavigate();
  const playerName = useAppStore((store) => store.playerName);
  return (
    <Center h="100vh">
      <Stack gap={24}>
        <Center>
          <Heading>{playerName}</Heading>
        </Center>
        <Center w="100%">
          <Stack direction="row" gap={24}>
            <Box bg="gray.300" padding={12}>
              time
            </Box>
            <Box bg="gray.300" padding={12}>
              chart
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
