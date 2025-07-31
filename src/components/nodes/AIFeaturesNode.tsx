import React, { useState } from 'react';

export const AIFeaturesNode: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = [
    {
      icon: '🧠',
      title: 'Dynamic Optimization Engine',
      subtitle: 'Powered by LLMs',
      description: 'Advanced machine learning algorithms that continuously optimize your investment strategy based on market conditions and personal goals.'
    },
    {
      icon: '📊',
      title: 'Budget Planning Algorithm',
      subtitle: 'Adjusts real-time cash flows',
      description: 'Intelligent budget management that adapts to your spending patterns and automatically allocates funds for optimal savings.'
    },
    {
      icon: '📈',
      title: 'Stock Selection & Asset Allocation',
      subtitle: 'AI-curated financial planning',
      description: 'Smart portfolio construction using AI analysis of market trends, risk factors, and your personal investment profile.'
    }
  ];

  return (
    <div className="content-panel max-w-lg">
      <div 
        className="tree-node flex items-center justify-center mb-6 mx-auto"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-3xl">🚀</span>
      </div>
      
      <h2 className="text-2xl font-bold glow-text mb-4 text-center">
        Unique AI Features
      </h2>
      
      {isExpanded && (
        <div className="fade-in-up space-y-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-capsule"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="font-bold text-lg glow-text mb-1">{feature.title}</h3>
              <div className="red-capsule text-xs mb-3 inline-block">
                {feature.subtitle}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
          
          <div className="text-center">
            <div className="red-capsule text-sm">
              Powered by cutting-edge AI technology
            </div>
          </div>
        </div>
      )}
      
      {!isExpanded && (
        <p className="text-center text-muted-foreground cursor-pointer" onClick={() => setIsExpanded(true)}>
          Click to explore AI features →
        </p>
      )}
    </div>
  );
};