import axios from 'axios';

const endpoint = process.env.REACT_APP_API_URL;

export const getQuestion = async (categoryId, difficulty) => {
  const { data } = await axios.get(`${endpoint}/api.php`, {
    params: {
      amount: 1,
      difficulty,
      ...(categoryId >= 0 ? { category: categoryId } : {}),
    },
  });
  return data.results[0];
};
