import React from 'react';

interface FloatingNavigationProps {
  onNavigate: (nodeId: string) => void;
  activeNode: string | null;
}

export const FloatingNavigation: React.FC<FloatingNavigationProps> = ({ onNavigate, activeNode }) => {
  const navItems = [
    { id: 'app-idea', label: 'App Idea', icon: '💡' },
    { id: 'target-audience', label: 'Audience', icon: '🎯' },
    { id: 'core-questions', label: 'Questions', icon: '❓' },
    { id: 'ai-features', label: 'AI Features', icon: '🚀' },
    { id: 'business-model', label: 'Business', icon: '📊' },
    { id: 'financial-freedom', label: 'Freedom', icon: '🏆' },
  ];

  return (
    <nav className="floating-nav">
      <div className="space-y-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              activeNode === item.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary/50 hover:bg-primary/20 text-foreground'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};