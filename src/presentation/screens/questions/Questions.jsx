import { Button, ButtonGroup, Center, Skeleton, Stack } from '@chakra-ui/react';
import { useAppStore } from 'application/store';
import useGetQuestion from 'infrastructure/services/questions/useGetQuestion';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MCQuestion from './components/MCQuestion';
import Timer from './components/Timer';

function Questions() {
  const navigate = useNavigate();

  const incTotalPlayedTime = useAppStore((state) => state.incTotalPlayedTime);
  const selectedCategory = useAppStore((state) => state.selectedCategory);
  const difficulty = useAppStore((state) => state.difficulty);
  const questionCounter = useAppStore((state) => state.questionCounter);
  const incQuestionCounter = useAppStore((state) => state.incQuestionCounter);
  const setQuestionCounter = useAppStore((state) => state.setQuestionCounter);
  const incSkipped = useAppStore((state) => state.incSkipped);
  const playedCategories = useAppStore((state) => state.playedCategories);
  const submitCurrAnswer = useAppStore((state) => state.submitCurrAnswer);
  const timerLimit = useAppStore((state) => state.timerLimit);
  const setTimerCount = useAppStore((state) => state.setTimerCount);

  const {
    data: question,
    isLoading: isLoadingQuestion,
    refetch: fetchNewQuestion,
    isFetching: isFetchingQuestion,
  } = useGetQuestion(selectedCategory, difficulty);

  useEffect(() => {
    fetchNewQuestion();
    const totalPlayedInterval = setInterval(() => {
      incTotalPlayedTime();
    }, 1000);
    return () => {
      clearInterval(totalPlayedInterval);
    };
  }, []);

  useEffect(() => {
    setQuestionCounter(0);
  }, []);

  const next = () => {
    incQuestionCounter();
    if (questionCounter === 2 && playedCategories.length === 3) {
      navigate('/score');
    } else if (questionCounter === 2) {
      navigate('/categories');
    } else {
      fetchNewQuestion();
      setTimerCount(timerLimit);
    }
  };

  const nextQuestion = () => {
    submitCurrAnswer(question?.correct_answer);
    next();
  };

  const skipQuestion = () => {
    incSkipped();
    next();
  };

  return (
    <Center flexDirection="column" h="100vh">
      <Stack width="60%" direction="column" gap={24}>
        <Timer skipQuestion={skipQuestion} timerLimit={timerLimit} />
        <Center>
          <Skeleton width="60%" isLoaded={!(isLoadingQuestion || isFetchingQuestion) && question}>
            <MCQuestion title={question?.question} type="MCQ" answers={question?.answers} />
          </Skeleton>
        </Center>
        <Center>
          <ButtonGroup width="100%" flexDirection="row" justifyContent="space-around">
            <Button isLoading={isLoadingQuestion || isFetchingQuestion} onClick={skipQuestion}>
              Skip
            </Button>
            <Button isLoading={isLoadingQuestion || isFetchingQuestion} onClick={nextQuestion}>
              Next
            </Button>
          </ButtonGroup>
        </Center>
      </Stack>
    </Center>
  );
}

export default Questions;
