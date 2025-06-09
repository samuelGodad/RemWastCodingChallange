export interface Skip {
  id: string;
  name: string;
  capacity: string;
  price: number;
  hirePeriod: string;
  image?: string;
  isAvailable: boolean;
  restrictions?: string[];
}

export interface ApiSkip {
  id: number;
  size: number;
  price_before_vat: number;
  vat: number;
  hire_period_days: number;
  forbidden: boolean;
  allowed_on_road: boolean;
}

export type PriceFilter = 'all' | 'low' | 'medium' | 'high';
export type SizeFilter = 'all' | 'small' | 'medium' | 'large';

export interface FilterState {
  price: PriceFilter;
  size: SizeFilter;
}

export interface FilterOption<T> {
  value: T;
  label: string;
} 