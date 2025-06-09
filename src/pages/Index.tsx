import { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import ThemeToggle from '../components/ThemeToggle';
import { Sidebar } from '../components/features/sidebar/Sidebar';
import { PageHeader } from '../components/layout/PageHeader';
import { SkipGrid } from '../components/features/skip-selection/SkipGrid';
import { MobileActionPanel } from '../components/layout/MobileActionPanel';

import { useSkips } from '../hooks/useSkips';
import { useSkipFilters } from '../hooks/useSkipFilters';
import type { PriceFilter, SizeFilter } from '../types/skip.types';
import {
  WORKFLOW_STEPS,
  CURRENT_STEP,
  PRICE_FILTER_OPTIONS,
  SIZE_FILTER_OPTIONS,
  MOBILE_PRICE_FILTERS,
  MOBILE_SIZE_FILTERS,
} from '../constants/app.constants';

const Index = () => {
  const [selectedSkip, setSelectedSkip] = useState<string | null>(null);
  const [priceFilter, setPriceFilter] = useState<PriceFilter>('all');
  const [sizeFilter, setSizeFilter] = useState<SizeFilter>('all');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { data: skips, isLoading, error } = useSkips();
  const filteredSkips = useSkipFilters(skips, priceFilter, sizeFilter);
  const selectedSkipDetails = skips?.find(skip => skip.id === selectedSkip);
  const handleSkipSelect = (skipId: string) => {
    const newSelectedSkip = skipId === selectedSkip ? null : skipId;
    setSelectedSkip(newSelectedSkip);
    
    if (newSelectedSkip && !sidebarOpen) {
      setSidebarOpen(true);
    }
  };

  const handleContinue = () => {
    if (selectedSkip) {
      console.log('Selected skip:', selectedSkip);
    }
  };

  const handleClearFilters = () => {
    setPriceFilter('all');
    setSizeFilter('all');
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center bg-card p-8 rounded-2xl border border-border">
          <h2 className="text-2xl font-bold text-destructive mb-2">Service Unavailable</h2>
          <p className="text-muted-foreground">Unable to load skip options. Please try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="flex min-h-screen">
        <Sidebar
          sidebarOpen={sidebarOpen}
          onToggleSidebar={toggleSidebar}
          steps={WORKFLOW_STEPS}
          currentStep={CURRENT_STEP}
          priceFilter={priceFilter}
          sizeFilter={sizeFilter}
          onPriceFilterChange={setPriceFilter}
          onSizeFilterChange={setSizeFilter}
          priceOptions={PRICE_FILTER_OPTIONS}
          sizeOptions={SIZE_FILTER_OPTIONS}
          selectedSkipDetails={selectedSkipDetails}
          onContinue={handleContinue}
        />

        <div 
          className={`
            flex-1 transition-all duration-300 ease-in-out
            ${sidebarOpen ? 'lg:ml-80' : 'lg:ml-16'}
          `}
        >
          <PageHeader
            priceFilter={priceFilter}
            sizeFilter={sizeFilter}
            onPriceFilterChange={setPriceFilter}
            onSizeFilterChange={setSizeFilter}
            mobilePriceFilters={MOBILE_PRICE_FILTERS}
            mobileSizeFilters={MOBILE_SIZE_FILTERS}
            mobileMenuOpen={mobileMenuOpen}
            onToggleMobileMenu={toggleMobileMenu}
            filteredCount={filteredSkips.length}
          />

          <div className="px-4 lg:px-8 pb-24 lg:pb-8">
            <SkipGrid
              skips={filteredSkips}
              selectedSkip={selectedSkip}
              onSkipSelect={handleSkipSelect}
              onClearFilters={handleClearFilters}
            />
          </div>
        </div>

        <MobileActionPanel
          selectedSkipDetails={selectedSkipDetails}
          onContinue={handleContinue}
        />
      </div>
    </div>
  );
};

export default Index; 