import { Check, AlertTriangle, Star, Zap, Shield, Clock } from 'lucide-react';

interface Skip {
  id: string;
  name: string;
  capacity: string;
  price: number;
  hirePeriod: string;
  image?: string;
  isAvailable: boolean;
  restrictions?: string[];
}

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: (skipId: string) => void;
}

const SkipCard = ({ skip, isSelected, onSelect }: SkipCardProps) => {
  const handleClick = () => {
    if (skip.isAvailable) {
      onSelect(skip.id);
    }
  };

  const getSkipImageUrl = () => {
    if (skip.image) return skip.image;
    
    const capacityNumber = skip.capacity.match(/\d+/)?.[0] || '8';
    return `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${capacityNumber}-yarder-skip.jpg`;
  };

  const getCapacityColor = () => {
    const capacity = parseInt(skip.capacity.match(/\d+/)?.[0] || '0');
    if (capacity <= 6) return 'from-emerald-500 to-teal-600';
    if (capacity <= 10) return 'from-blue-500 to-indigo-600';
    return 'from-purple-500 to-pink-600';
  };

  return (
    <div 
      onClick={handleClick}
      className={`
        relative group cursor-pointer transition-all duration-300 transform
        ${skip.isAvailable ? 'hover:-translate-y-2 hover:scale-105' : 'opacity-60 cursor-not-allowed'}
        ${isSelected ? 'scale-105 z-10' : ''}
      `}
    >
      {/* Modern Card Container */}
      <div className={`
        relative bg-card rounded-2xl overflow-hidden transition-all duration-300
        ${isSelected 
          ? 'ring-2 ring-primary shadow-2xl shadow-primary/20' 
          : 'shadow-lg hover:shadow-xl border border-border/50'
        }
      `}>
        
        {/* Selection Badge */}
        {isSelected && (
          <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full p-2 shadow-lg animate-pulse">
            <Check className="h-4 w-4" />
          </div>
        )}

        {/* Capacity Badge */}
        <div className={`absolute top-3 left-3 z-20 bg-gradient-to-r ${getCapacityColor()} text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg`}>
          <Star className="h-3 w-3" />
          {skip.capacity}
        </div>

        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={getSkipImageUrl()}
            alt={`${skip.name} skip`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/8-yarder-skip.jpg';
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          
          {/* Price Overlay */}
          <div className="absolute bottom-3 left-3 text-white">
            <div className="text-2xl font-bold">£{skip.price}</div>
            <div className="text-xs opacity-90">All inclusive</div>
          </div>

          {/* Unavailable Overlay */}
          {!skip.isAvailable && (
            <div className="absolute inset-0 bg-destructive/80 flex items-center justify-center">
              <div className="bg-white/90 text-destructive px-4 py-2 rounded-full flex items-center gap-2 font-bold">
                <AlertTriangle className="h-4 w-4" />
                Unavailable
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4">
          {/* Header */}
          <div className="mb-3">
            <h3 className="text-lg font-bold text-foreground mb-1">{skip.name}</h3>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {skip.hirePeriod}
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3" />
                Insured
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-4 space-y-1">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Zap className="h-3 w-3 text-primary" />
              <span>Same-day delivery</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Check className="h-3 w-3 text-secondary" />
              <span>No hidden charges</span>
            </div>
          </div>

          {/* Restrictions Warning */}
          {skip.restrictions && skip.restrictions.length > 0 && (
            <div className="mb-4">
              <div className="bg-amber-50 border border-amber-200 text-amber-800 px-2 py-1 rounded text-xs flex items-center gap-1">
                <AlertTriangle className="h-3 w-3" />
                Permit may be required
              </div>
            </div>
          )}

          {/* Action Button */}
          <button
            disabled={!skip.isAvailable}
            className={`
              w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm
              ${skip.isAvailable 
                ? isSelected 
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg' 
                  : 'bg-muted hover:bg-accent text-foreground hover:text-accent-foreground border border-border hover:border-primary/30'
                : 'bg-muted text-muted-foreground/50 cursor-not-allowed'
              }
            `}
          >
            {isSelected ? (
              <>
                <Check className="h-4 w-4" />
                Selected
              </>
            ) : (
              <>
                <Star className="h-4 w-4" />
                Select This Skip
              </>
            )}
          </button>
        </div>

        {/* Selection Glow Effect */}
        {isSelected && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 pointer-events-none"></div>
        )}
      </div>
    </div>
  );
};

export default SkipCard;
