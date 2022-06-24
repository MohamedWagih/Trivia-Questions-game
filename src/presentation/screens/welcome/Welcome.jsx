import React from 'react';
import { Box, Center, Input, Grid, Button, Flex } from '@chakra-ui/react';

function Welcome() {
  return (
    <Center h="100vh">
      <Grid templateColumns="repeat(1, 1fr)" gap={6}>
        <Box bg="gray.300" width="600px" borderRadius="10px" p={4}>
          <Center h="100%">
            <Grid width="100%" templateColumns="repeat(1, 1fr)" padding="20px" gap={6}>
              <Input _placeholder={{ color: 'inherit' }} placeholder="Player Name" size="lg" />
              <Flex justifyContent="space-between" flexDir="row">
                <Button>Easy</Button>
                <Button>Medium</Button>
                <Button>Hard</Button>
              </Flex>
            </Grid>
          </Center>
        </Box>
        <Button>PLAY</Button>
      </Grid>
    </Center>
  );
}

export default Welcome;
