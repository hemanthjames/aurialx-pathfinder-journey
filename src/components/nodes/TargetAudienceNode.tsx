import React, { useState } from 'react';

export const TargetAudienceNode: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const audiences = [
    { icon: '💼', text: 'Working professionals (ages 21–45)' },
    { icon: '🎓', text: 'Students entering the job market' },
    { icon: '💑', text: 'Married couples planning joint investments' },
    { icon: '🏖️', text: 'Individuals aiming for early retirement' },
    { icon: '💻', text: 'Tech-savvy users interested in passive income' },
  ];

  return (
    <div className="content-panel max-w-md">
      <div 
        className="tree-node flex items-center justify-center mb-6 mx-auto"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-3xl">🎯</span>
      </div>
      
      <h2 className="text-2xl font-bold glow-text mb-4 text-center">
        Who Is This For?
      </h2>
      
      {isExpanded && (
        <div className="fade-in-up space-y-4">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="question-node flex items-center space-x-3"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-2xl">{audience.icon}</span>
              <span className="text-sm">{audience.text}</span>
            </div>
          ))}
          
          <div className="red-capsule text-center text-sm mt-6">
            Primary Age Range: 21-45 years
          </div>
        </div>
      )}
      
      {!isExpanded && (
        <p className="text-center text-muted-foreground cursor-pointer" onClick={() => setIsExpanded(true)}>
          Click to see target users →
        </p>
      )}
    </div>
  );
};