
import { Truck, Loader } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-2xl shadow-2xl shadow-primary/30">
            <Truck className="h-10 w-10 text-primary-foreground animate-bounce" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl animate-ping opacity-20"></div>
        </div>

        {/* Loading Spinner */}
        <div className="flex items-center justify-center mb-6">
          <Loader className="h-8 w-8 text-primary animate-spin" />
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-foreground mb-3">Loading Premium Skips</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Searching for the best skip options in your area...
        </p>

        {/* Progress Dots */}
        <div className="flex items-center justify-center space-x-2 mt-6">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
