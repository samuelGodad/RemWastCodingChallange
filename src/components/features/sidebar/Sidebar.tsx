import { ArrowRight } from 'lucide-react';
import { SidebarHeader } from './SidebarHeader';
import { ProgressSteps } from './ProgressSteps';
import { FilterSection } from './FilterSection';
import type { Skip, PriceFilter, SizeFilter, FilterOption } from '../../../types/skip.types';
import type { Step } from '../../../types/ui.types';

interface SidebarProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  steps: Step[];
  currentStep: number;
  priceFilter: PriceFilter;
  sizeFilter: SizeFilter;
  onPriceFilterChange: (filter: PriceFilter) => void;
  onSizeFilterChange: (filter: SizeFilter) => void;
  priceOptions: FilterOption<PriceFilter>[];
  sizeOptions: FilterOption<SizeFilter>[];
  selectedSkipDetails?: Skip;
  onContinue: () => void;
}

export const Sidebar = ({
  sidebarOpen,
  onToggleSidebar,
  steps,
  currentStep,
  priceFilter,
  sizeFilter,
  onPriceFilterChange,
  onSizeFilterChange,
  priceOptions,
  sizeOptions,
  selectedSkipDetails,
  onContinue
}: SidebarProps) => {
  return (
    <div className={`
      hidden lg:flex fixed top-0 left-0 h-full bg-card border-r border-border shadow-2xl flex-col transition-all duration-300 ease-in-out z-30
      ${sidebarOpen ? 'w-80' : 'w-16'}
    `}>
      <SidebarHeader 
        sidebarOpen={sidebarOpen} 
        onToggleSidebar={onToggleSidebar} 
      />
      
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
        {sidebarOpen && (
          <div className="p-6 border-b border-border">
            <ProgressSteps 
              steps={steps} 
              currentStep={currentStep} 
              sidebarOpen={sidebarOpen} 
            />
          </div>
        )}
        
        <FilterSection
          priceFilter={priceFilter}
          sizeFilter={sizeFilter}
          onPriceFilterChange={onPriceFilterChange}
          onSizeFilterChange={onSizeFilterChange}
          priceOptions={priceOptions}
          sizeOptions={sizeOptions}
          sidebarOpen={sidebarOpen}
        />
      </div>
      
      {sidebarOpen && selectedSkipDetails && (
        <div className="p-6 border-t border-border bg-card shrink-0">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-4 animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
            <h4 className="font-semibold text-foreground mb-2">Selected Skip</h4>
            <div className="space-y-2">
              <p className="text-sm text-primary font-medium">{selectedSkipDetails.name}</p>
              <p className="text-2xl font-bold text-foreground">£{selectedSkipDetails.price}</p>
              <p className="text-xs text-muted-foreground">{selectedSkipDetails.hirePeriod}</p>
            </div>
            <button
              onClick={onContinue}
              className="w-full mt-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Continue to Schedule
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}; 