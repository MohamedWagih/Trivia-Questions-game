import axios from 'axios';

const endpoint = process.env.REACT_APP_API_URL;

export const getCategories = async () => {
  const { data } = await axios.get(`${endpoint}/api_category.php`);
  return data.trivia_categories;
};
