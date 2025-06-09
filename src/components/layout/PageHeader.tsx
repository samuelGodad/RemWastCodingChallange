import { MapPin, Zap, Shield, CheckCircle, Menu, X } from 'lucide-react';
import type { PriceFilter, SizeFilter, FilterOption } from '../../types/skip.types';
import { LOCATION_INFO } from '../../constants/app.constants';

interface PageHeaderProps {
  priceFilter: PriceFilter;
  sizeFilter: SizeFilter;
  onPriceFilterChange: (filter: PriceFilter) => void;
  onSizeFilterChange: (filter: SizeFilter) => void;
  mobilePriceFilters: FilterOption<PriceFilter>[];
  mobileSizeFilters: FilterOption<SizeFilter>[];
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  filteredCount: number;
}

export const PageHeader = ({
  priceFilter,
  sizeFilter,
  onPriceFilterChange,
  onSizeFilterChange,
  mobilePriceFilters,
  mobileSizeFilters,
  mobileMenuOpen,
  onToggleMobileMenu,
  filteredCount
}: PageHeaderProps) => {
  return (
    <>
      {/* Desktop Header */}
      <div className="hidden lg:block">
        <div className="bg-gradient-to-r from-primary/10 via-background to-secondary/10 p-6 mb-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-full flex items-center space-x-2 text-primary-foreground shadow-lg">
                  <MapPin className="h-4 w-4" />
                  <span className="font-semibold">{LOCATION_INFO.area}</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-muted-foreground">
                  <span className="font-medium">{LOCATION_INFO.wasteType}</span>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-2">
                Choose Your Skip Size
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Professional skip hire services in {LOCATION_INFO.area}. Select from our range of skip sizes, all with transparent pricing and same-day delivery available.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Zap, text: "Same-day delivery available" },
                { icon: Shield, text: "Fully insured & licensed" },
                { icon: CheckCircle, text: "No hidden charges" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-card/50 backdrop-blur-sm rounded-lg p-3 border border-border/50">
                  <feature.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={onToggleMobileMenu}
              className="p-2 rounded-lg bg-card border border-border shadow-sm hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          
          <div className="text-center mb-4">
            <div className="bg-gradient-to-r from-primary to-secondary px-3 py-1.5 rounded-full inline-flex items-center space-x-2 text-primary-foreground shadow-md mb-3">
              <MapPin className="h-3 w-3" />
              <span className="text-sm font-semibold">{LOCATION_INFO.area}</span>
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Choose Your Skip</h1>
            <p className="text-sm text-muted-foreground">Professional skip hire • {LOCATION_INFO.wasteType}</p>
          </div>
        </div>

        {/* Mobile Filters */}
        <div className="px-4 mb-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {mobilePriceFilters.map((option) => (
              <button
                key={option.value}
                onClick={() => onPriceFilterChange(option.value)}
                className={`
                  px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200
                  ${priceFilter === option.value
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-accent'
                  }
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {mobileSizeFilters.map((option) => (
              <button
                key={option.value}
                onClick={() => onSizeFilterChange(option.value)}
                className={`
                  px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200
                  ${sizeFilter === option.value
                    ? 'bg-secondary text-secondary-foreground shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-accent'
                  }
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="text-center mt-3">
            <span className="text-sm text-muted-foreground">
              {filteredCount} skip{filteredCount !== 1 ? 's' : ''} available
            </span>
          </div>
        </div>
      </div>
    </>
  );
}; 