import { Box, Button, Center, Grid, Input, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useAppStore } from 'application/store';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      playerName: '',
      difficulty: '',
    },
  });

  const setPlayerName = useAppStore((store) => store.setPlayerName);
  const setDifficulty = useAppStore((store) => store.setDifficulty);
  const initStoreState = useAppStore((store) => store.initStoreState);

  useEffect(() => {
    initStoreState();
  }, []);

  const play = () => {
    handleSubmit(({ playerName, difficulty }) => {
      setPlayerName(playerName);
      setDifficulty(difficulty);
      navigate('/categories');
    })();
  };

  return (
    <Center h="100vh">
      <Grid templateColumns="repeat(1, 1fr)" gap={6}>
        <Box bg="gray.300" width="600px" borderRadius="10px" p={4}>
          <Center h="100%">
            <Grid width="100%" templateColumns="repeat(1, 1fr)" padding="20px" gap={6}>
              <Controller
                name="playerName"
                control={control}
                rules={{
                  required: 'Name is required!',
                }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <div>
                    <Input
                      isRequired
                      isInvalid={error}
                      _placeholder={{ color: 'inherit' }}
                      placeholder="Player Name"
                      size="lg"
                      onChange={(e) => onChange(e.target.value)}
                      value={value}
                    />
                    {error && <span style={{ color: 'red' }}>{error.message}</span>}
                  </div>
                )}
              />
              <Controller
                name="difficulty"
                control={control}
                rules={{
                  required: 'please choose difficulty!',
                }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <div>
                    <RadioGroup is onChange={(value) => onChange(value)} value={value}>
                      <Stack direction="row">
                        <Radio value="easy">Easy</Radio>
                        <Radio value="medium">Medium</Radio>
                        <Radio value="hard">Hard</Radio>
                      </Stack>
                    </RadioGroup>
                    {error && <span style={{ color: 'red' }}>{error.message}</span>}
                  </div>
                )}
              />
            </Grid>
          </Center>
        </Box>
        <Button onClick={play}>PLAY</Button>
      </Grid>
    </Center>
  );
}

export default Welcome;
