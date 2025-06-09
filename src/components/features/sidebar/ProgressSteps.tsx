import { CheckCircle } from 'lucide-react';
import type { Step } from '../../../types/ui.types';

interface ProgressStepsProps {
  steps: Step[];
  currentStep: number;
  sidebarOpen: boolean;
}

export const ProgressSteps = ({ steps, currentStep, sidebarOpen }: ProgressStepsProps) => {
  if (!sidebarOpen) return null;

  return (
    <div className="space-y-4">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = step.id === currentStep;
        const isCompleted = step.completed;
        
        return (
          <div key={step.id} className="relative flex items-center space-x-3">
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 relative z-10
              ${isCompleted 
                ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg' 
                : isActive 
                  ? 'bg-primary/10 text-primary border-2 border-primary' 
                  : 'bg-muted text-muted-foreground'
              }
            `}>
              {isCompleted ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                <Icon className="h-5 w-5" />
              )}
            </div>
            <div>
              <p className={`font-medium ${isActive || isCompleted ? 'text-foreground' : 'text-muted-foreground'}`}>
                {step.name}
              </p>
              <p className="text-xs text-muted-foreground">Step {step.id}</p>
            </div>
            {index < steps.length - 1 && (
              <div className={`
                absolute left-[19px] top-10 w-0.5 h-6 transition-all duration-300
                ${isCompleted ? 'bg-gradient-to-b from-emerald-500 to-teal-600' : 'bg-slate-400'}
              `} />
            )}
          </div>
        );
      })}
    </div>
  );
}; 