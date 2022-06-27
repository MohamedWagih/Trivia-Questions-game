import { useQuery } from 'react-query';
import { getQuestion } from 'infrastructure/services/api';
import { questionMapper } from 'infrastructure/dataMapper';

function useGetQuestion(categoryId, difficulty) {
  const query = useQuery(
    ['questions', { categoryId, difficulty }],
    () => getQuestion(categoryId, difficulty),
    {
      staleTime: 0,
      enabled: false,
    },
  );

  const mappedQuestion = query.data ? questionMapper(query.data) : {};
  return { ...query, data: mappedQuestion };
}

export default useGetQuestion;
