import React, { useState } from 'react';

export const BusinessModelNode: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const businessPoints = [
    { icon: '🆓', title: 'Freemium Model', desc: 'Basic insights and portfolio tracking' },
    { icon: '💎', title: 'Pro Version', desc: 'Real-time AI suggestions and advanced analytics' },
    { icon: '📅', title: 'Subscription Planning', desc: 'Monthly budget optimization and goal tracking' },
    { icon: '🤝', title: 'Affiliate Partnerships', desc: 'Integration with investment platforms' },
    { icon: '💳', title: 'Card Integration', desc: 'Seamless connection with debit/investment cards' },
    { icon: '📊', title: 'Data Analytics', desc: 'Long-term revenue insights and user behavior analysis' }
  ];

  return (
    <div className="content-panel max-w-lg">
      <div 
        className="tree-node flex items-center justify-center mb-6 mx-auto"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-3xl">📊</span>
      </div>
      
      <h2 className="text-2xl font-bold glow-text mb-4 text-center">
        Turning Aurial.X Into a Scalable Business
      </h2>
      
      {isExpanded && (
        <div className="fade-in-up space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {businessPoints.map((point, index) => (
              <div 
                key={index}
                className="feature-capsule h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl mb-2">{point.icon}</div>
                <h3 className="font-semibold text-sm glow-text mb-2">{point.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="red-capsule text-center text-sm mt-6">
            Multiple Revenue Streams = Sustainable Growth
          </div>
          
          <div className="text-center text-xs text-muted-foreground">
            Revenue projections: $10M+ ARR potential within 3 years
          </div>
        </div>
      )}
      
      {!isExpanded && (
        <p className="text-center text-muted-foreground cursor-pointer" onClick={() => setIsExpanded(true)}>
          Click to see business strategy →
        </p>
      )}
    </div>
  );
};