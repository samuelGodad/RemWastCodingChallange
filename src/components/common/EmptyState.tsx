import { Search, Filter } from 'lucide-react';
import type { EmptyStateProps } from '../../types/ui.types';

export const EmptyState = ({ 
  title, 
  description, 
  onClearFilters, 
  onBrowseAll 
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 relative">
      <div className="relative mb-8">
        {/* Animated Icon */}
        <div className="w-24 h-24 bg-gradient-to-br from-muted to-muted/50 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
          <Search className="h-12 w-12 text-muted-foreground/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse"></div>
        </div>
      </div>
      
      <div className="text-center max-w-md">
        <h3 className="text-2xl font-bold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {onClearFilters && (
            <button
              onClick={onClearFilters}
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Clear All Filters
            </button>
          )}
          {onBrowseAll && (
            <button
              onClick={onBrowseAll}
              className="px-6 py-3 bg-muted hover:bg-accent text-foreground rounded-lg font-semibold border border-border hover:border-primary/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Search className="h-4 w-4" />
              Browse All Skips
            </button>
          )}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-secondary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-accent/20 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}; 