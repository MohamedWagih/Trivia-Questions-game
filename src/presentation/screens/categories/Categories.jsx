import React from 'react';
import { Grid, Center, Stack, Button } from '@chakra-ui/react';
import Category from './components/Category';
import { useNavigate } from 'react-router-dom';

function Categories() {
  const navigate = useNavigate();
  return (
    <Center width="100%" h="100vh">
      <Stack direction="column" width="60%" gap={6}>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <Category value="Random" />
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => (
            <Category key={key} value={key} />
          ))}
        </Grid>
        <Button onClick={() => navigate('/questions')}>Start</Button>
      </Stack>
    </Center>
  );
}

export default Categories;
