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
    incorrect_answers,
  };
};
