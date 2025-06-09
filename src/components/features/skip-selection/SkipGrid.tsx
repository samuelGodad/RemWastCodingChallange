import SkipCard from '../../SkipCard';
import { EmptyState } from '../../common/EmptyState';
import type { Skip, PriceFilter, SizeFilter } from '../../../types/skip.types';

interface SkipGridProps {
  skips: Skip[];
  selectedSkip: string | null;
  onSkipSelect: (skipId: string) => void;
  onClearFilters: () => void;
}

export const SkipGrid = ({ 
  skips, 
  selectedSkip, 
  onSkipSelect, 
  onClearFilters 
}: SkipGridProps) => {
  if (skips.length === 0) {
    return (
      <EmptyState
        title="No Skips Found"
        description="We couldn't find any skips matching your current filters. Try adjusting your price range or size preferences to see more options."
        onClearFilters={onClearFilters}
        onBrowseAll={onClearFilters}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {skips.map((skip) => (
        <SkipCard
          key={skip.id}
          skip={skip}
          isSelected={selectedSkip === skip.id}
          onSelect={() => onSkipSelect(skip.id)}
        />
      ))}
    </div>
  );
}; 