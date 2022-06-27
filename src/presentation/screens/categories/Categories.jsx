import { Button, Center, Grid, Skeleton, Stack } from '@chakra-ui/react';
import { useAppStore } from 'application/store';
import { useGetCategories } from 'infrastructure/services';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Category from './components/Category';

function Categories() {
  const navigate = useNavigate();

  const setCategory = useAppStore((store) => store.setCategory);
  const playSelectedCategory = useAppStore((store) => store.playSelectedCategory);
  const { data: categories, isLoading: isCategoriesLoading } = useGetCategories();

  const startPlaying = () => {
    playSelectedCategory();
    navigate('/questions');
  };

  useEffect(() => {
    setCategory(-1);
  }, []);

  return (
    <Center width="100%" h="100vh">
      <Stack direction="column" width="60%" gap={6}>
        <Skeleton isLoaded={!isCategoriesLoading}>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <Category id={-1} name="Random" />
            {categories?.map(({ id, name }) => (
              <Category key={id} id={id} name={name} />
            ))}
          </Grid>
        </Skeleton>
        <Button isLoading={isCategoriesLoading} onClick={startPlaying}>
          Start
        </Button>
      </Stack>
    </Center>
  );
}

export default Categories;
