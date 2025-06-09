import { LucideIcon } from 'lucide-react';

export interface Step {
  id: number;
  name: string;
  completed: boolean;
  icon: LucideIcon;
}

export interface EmptyStateProps {
  title: string;
  description: string;
  onClearFilters?: () => void;
  onBrowseAll?: () => void;
}

export interface FilterOption<T> {
  value: T;
  label: string;
} 