import React, { useState } from 'react';

export const AppIdeaNode: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="content-panel max-w-md">
      <div 
        className="tree-node flex items-center justify-center mb-6 mx-auto"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-3xl">🌱</span>
      </div>
      
      <h2 className="text-2xl font-bold glow-text mb-4 text-center">
        What is Aurial.X?
      </h2>
      
      {isExpanded && (
        <div className="fade-in-up">
          <div className="red-capsule text-center mb-4">
            "Aurial.X is an AI-driven financial investment planner that helps users achieve long-term wealth through personalized, intelligent, and dynamic strategies tailored to their income, lifestyle, and future goals."
          </div>
          
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>AI-powered personalization</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Dynamic strategy adaptation</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Long-term wealth building</span>
            </div>
          </div>
        </div>
      )}
      
      {!isExpanded && (
        <p className="text-center text-muted-foreground cursor-pointer" onClick={() => setIsExpanded(true)}>
          Click to explore →
        </p>
      )}
    </div>
  );
};