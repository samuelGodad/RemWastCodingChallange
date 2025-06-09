import { MapPin, Package, Truck, Calendar, CreditCard } from 'lucide-react';
import type { Step } from '../types/ui.types';
import type { FilterOption, PriceFilter, SizeFilter } from '../types/skip.types';

export const API_ENDPOINTS = {
  SKIPS: 'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft',
} as const;

export const WORKFLOW_STEPS: Step[] = [
  { id: 1, name: 'Location', completed: true, icon: MapPin },
  { id: 2, name: 'Waste Type', completed: true, icon: Package },
  { id: 3, name: 'Skip Selection', completed: false, icon: Truck },
  { id: 4, name: 'Schedule', completed: false, icon: Calendar },
  { id: 5, name: 'Payment', completed: false, icon: CreditCard },
];

export const PRICE_FILTER_OPTIONS: FilterOption<PriceFilter>[] = [
  { value: 'all', label: 'All' },
  { value: 'low', label: '< £400' },
  { value: 'medium', label: '£400-600' },
  { value: 'high', label: '> £600' },
];

export const SIZE_FILTER_OPTIONS: FilterOption<SizeFilter>[] = [
  { value: 'all', label: 'All Sizes' },
  { value: 'small', label: '4-6 Yards' },
  { value: 'medium', label: '8-12 Yards' },
  { value: 'large', label: '14+ Yards' },
];

export const MOBILE_PRICE_FILTERS: FilterOption<PriceFilter>[] = [
  { value: 'all', label: 'All' },
  { value: 'low', label: '< £400' },
  { value: 'medium', label: '£400-600' },
  { value: 'high', label: '> £600' },
];

export const MOBILE_SIZE_FILTERS: FilterOption<SizeFilter>[] = [
  { value: 'all', label: 'All' },
  { value: 'small', label: '4-6 Yards' },
  { value: 'medium', label: '8-12 Yards' },
  { value: 'large', label: '14+ Yards' },
];

export const CURRENT_STEP = 3;

export const LOCATION_INFO = {
  postcode: 'NR32',
  area: 'Lowestoft',
  wasteType: 'Garden Waste',
} as const; 