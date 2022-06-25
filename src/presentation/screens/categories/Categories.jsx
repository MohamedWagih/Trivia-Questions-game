import { Grid, Center, Stack, Button, Skeleton } from '@chakra-ui/react';
import Category from './components/Category';
import { useNavigate } from 'react-router-dom';
import { useGetCategories } from 'infrastructure/services';
import { useAppStore } from 'application/store';
import { useEffect } from 'react';

function Categories() {
  const navigate = useNavigate();
  const selectedCategory = useAppStore((store) => store.selectedCategory);
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
        <Button isLoading={isCategoriesLoading} disabled={!selectedCategory} onClick={startPlaying}>
          Start
        </Button>
      </Stack>
    </Center>
  );
}

export default Categories;
