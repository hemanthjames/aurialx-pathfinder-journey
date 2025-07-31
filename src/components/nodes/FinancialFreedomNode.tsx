import React, { useState } from 'react';

interface FinancialFreedomNodeProps {
  onComplete: () => void;
}

export const FinancialFreedomNode: React.FC<FinancialFreedomNodeProps> = ({ onComplete }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="text-center space-y-6">
      <div 
        className="financial-freedom-node mx-auto flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onComplete}
      >
        <span className="text-4xl">🏆</span>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-3xl font-bold glow-text">
          Financial Freedom
        </h2>
        
        <div className="red-capsule text-lg font-semibold max-w-md mx-auto">
          Your Personalized Path to Financial Freedom Begins Here
        </div>
        
        {isHovered && (
          <div className="fade-in-up space-y-3 max-w-lg mx-auto">
            <div className="content-panel">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">10-25</div>
                  <div className="text-xs text-muted-foreground">Years to Freedom</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">AI</div>
                  <div className="text-xs text-muted-foreground">Powered Strategy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">∞</div>
                  <div className="text-xs text-muted-foreground">Possibilities</div>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Click to start your simulation and discover your personalized investment roadmap
            </p>
          </div>
        )}
        
        {!isHovered && (
          <p className="text-muted-foreground cursor-pointer">
            Hover to see your future →
          </p>
        )}
      </div>
    </div>
  );
};