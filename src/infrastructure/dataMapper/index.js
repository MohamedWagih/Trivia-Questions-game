import { shuffleArray } from 'infrastructure/utils';

export const questionMapper = ({
  category,
  type,
  difficulty,
  question,
  correct_answer,
  incorrect_answers,
}) => {
  return {
    category,
    type: type === 'boolean' ? 'TF' : 'MCQ',
    difficulty,
    question,
    correct_answer,
    answers: shuffleArray([correct_answer, ...incorrect_answers]),
  };
};
