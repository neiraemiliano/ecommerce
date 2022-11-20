import { fetchProducts } from '@/services/api';
import { useQuery } from '@tanstack/react-query';

export const useFetchProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 1 * 60 * 1000,
    cacheTime: 5 * 60 * 1000,
  });
};
