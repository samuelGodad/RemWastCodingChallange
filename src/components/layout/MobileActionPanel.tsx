import { ArrowRight } from 'lucide-react';
import type { Skip } from '../../types/skip.types';

interface MobileActionPanelProps {
  selectedSkipDetails?: Skip;
  onContinue: () => void;
}

export const MobileActionPanel = ({ selectedSkipDetails, onContinue }: MobileActionPanelProps) => {
  if (!selectedSkipDetails) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-40">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-primary font-medium">{selectedSkipDetails.name}</p>
          <p className="text-xl font-bold text-foreground">£{selectedSkipDetails.price}</p>
        </div>
        <button
          onClick={onContinue}
          className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
        >
          Continue
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}; 