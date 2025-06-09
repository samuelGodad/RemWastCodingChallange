import { useQuery } from '@tanstack/react-query';
import { skipService } from '../services/skip.service';
import type { Skip } from '../types/skip.types';

export const useSkips = () => {
  return useQuery<Skip[], Error>({
    queryKey: ['skips'],
    queryFn: skipService.fetchSkips,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}; 