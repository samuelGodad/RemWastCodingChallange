import { Truck, Menu, X } from 'lucide-react';

interface SidebarHeaderProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export const SidebarHeader = ({ sidebarOpen, onToggleSidebar }: SidebarHeaderProps) => {
  return (
    <div className={`border-b border-border transition-all duration-300 ${sidebarOpen ? 'p-6' : 'p-3'}`}>
      <div className={`flex items-center justify-between ${sidebarOpen ? 'mb-6' : 'mb-0'}`}>
        <div className="flex items-center space-x-3">
          {sidebarOpen && (
            <>
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Truck className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Business Skip Hire</h1>
                <p className="text-xs text-muted-foreground">Professional Service</p>
              </div>
            </>
          )}
        </div>
        <div className="flex items-center">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            {sidebarOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
          </button>
        </div>
      </div>
    </div>
  );
}; 