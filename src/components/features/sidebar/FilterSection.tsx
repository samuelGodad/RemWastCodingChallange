import { Filter } from 'lucide-react';
import type { PriceFilter, SizeFilter, FilterOption } from '../../../types/skip.types';

interface FilterSectionProps {
  priceFilter: PriceFilter;
  sizeFilter: SizeFilter;
  onPriceFilterChange: (filter: PriceFilter) => void;
  onSizeFilterChange: (filter: SizeFilter) => void;
  priceOptions: FilterOption<PriceFilter>[];
  sizeOptions: FilterOption<SizeFilter>[];
  sidebarOpen: boolean;
}

export const FilterSection = ({
  priceFilter,
  sizeFilter,
  onPriceFilterChange,
  onSizeFilterChange,
  priceOptions,
  sizeOptions,
  sidebarOpen
}: FilterSectionProps) => {
  if (!sidebarOpen) return null;

  return (
    <div className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Filter Options
        </h3>
        
        {/* Price Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-foreground mb-2">
            Price Range
          </label>
          <div className="grid grid-cols-2 gap-2">
            {priceOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => onPriceFilterChange(option.value)}
                className={`
                  px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${priceFilter === option.value
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Size Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-foreground mb-2">
            Skip Size
          </label>
          <div className="grid grid-cols-2 gap-2">
            {sizeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => onSizeFilterChange(option.value)}
                className={`
                  px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${sizeFilter === option.value
                    ? 'bg-secondary text-secondary-foreground shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 