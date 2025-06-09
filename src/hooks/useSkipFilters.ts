import { useMemo } from 'react';
import type { Skip, PriceFilter, SizeFilter } from '../types/skip.types';

const extractCapacity = (capacity: string): number => {
  return parseInt(capacity.match(/\d+/)?.[0] || '0');
};

const matchesPriceFilter = (skip: Skip, filter: PriceFilter): boolean => {
  if (filter === 'all') return true;
  
  const price = skip.price;
  switch (filter) {
    case 'low': return price < 400;
    case 'medium': return price >= 400 && price < 600;
    case 'high': return price >= 600;
    default: return true;
  }
};

const matchesSizeFilter = (skip: Skip, filter: SizeFilter): boolean => {
  if (filter === 'all') return true;
  
  const capacity = extractCapacity(skip.capacity);
  switch (filter) {
    case 'small': return capacity >= 4 && capacity <= 6;
    case 'medium': return capacity >= 8 && capacity <= 12;
    case 'large': return capacity >= 14;
    default: return true;
  }
};

export const useSkipFilters = (
  skips: Skip[] | undefined,
  priceFilter: PriceFilter,
  sizeFilter: SizeFilter
) => {
  return useMemo(() => {
    if (!skips) return [];
    
    return skips.filter(skip => 
      matchesPriceFilter(skip, priceFilter) && 
      matchesSizeFilter(skip, sizeFilter)
    );
  }, [skips, priceFilter, sizeFilter]);
}; 