import type { Skip, ApiSkip } from '../types/skip.types';
import { API_ENDPOINTS } from '../constants/app.constants';

const transformApiSkip = (apiSkip: ApiSkip): Skip => {
  const finalPrice = Math.round(apiSkip.price_before_vat * (1 + apiSkip.vat / 100));
  
  return {
    id: apiSkip.id.toString(),
    name: `${apiSkip.size} Yard Skip`,
    capacity: `${apiSkip.size} Yards`,
    price: finalPrice,
    hirePeriod: `${apiSkip.hire_period_days} day hire period`,
    isAvailable: !apiSkip.forbidden,
    restrictions: apiSkip.allowed_on_road ? [] : ['Road placement restrictions apply']
  };
};

export const fetchSkips = async (): Promise<Skip[]> => {
  const response = await fetch(API_ENDPOINTS.SKIPS);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch skips: ${response.status} ${response.statusText}`);
  }
  
  const data: ApiSkip[] = await response.json();
  return data.map(transformApiSkip);
};

export interface SkipService {
  fetchSkips: () => Promise<Skip[]>;
}

export const skipService: SkipService = {
  fetchSkips,
}; 