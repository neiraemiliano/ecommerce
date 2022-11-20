import { signin } from '@/services/api';
import { useMutation } from '@tanstack/react-query';

export const useSignInMutation = () => {
  return useMutation({
    mutationFn: signin,
    onSuccess: (response) => {
      return response;
    },
  });
};
