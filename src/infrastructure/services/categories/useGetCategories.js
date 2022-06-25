import { useQuery } from 'react-query';
import { getCategories } from 'infrastructure/services/api';

function useGetCategories() {
  const query = useQuery(['categories'], getCategories);
  return query;
}

export default useGetCategories;
