import React, { useState } from 'react';

export const CoreQuestionsNode: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredQuestion, setHoveredQuestion] = useState<number | null>(null);

  const questions = [
    { icon: '💰', text: 'What is your monthly income?' },
    { icon: '💑', text: 'Are you married or not? If yes, what is your spouse\'s income?' },
    { icon: '💸', text: 'What are your monthly expenses?' },
    { icon: '🎂', text: 'What is your age?' },
    { icon: '📅', text: 'How many years will you consistently invest (10, 15, 20, or 25)?' },
    { icon: '📈', text: 'Do you expect an annual step-up in investments?' },
  ];

  return (
    <div className="content-panel max-w-lg">
      <div 
        className="tree-node flex items-center justify-center mb-6 mx-auto"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-3xl">❓</span>
      </div>
      
      <h2 className="text-2xl font-bold glow-text mb-4 text-center">
        Core Questions Aurial.X Asks
      </h2>
      
      {isExpanded && (
        <div className="fade-in-up space-y-3">
          <div className="text-center text-muted-foreground mb-6">
            Intelligent questionnaire flow powered by AI
          </div>
          
          {questions.map((question, index) => (
            <div 
              key={index}
              className={`question-node transition-all duration-300 ${
                hoveredQuestion === index ? 'border-primary scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredQuestion(index)}
              onMouseLeave={() => setHoveredQuestion(null)}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start space-x-3">
                <span className="text-xl flex-shrink-0">{question.icon}</span>
                <span className="text-sm leading-relaxed">{question.text}</span>
              </div>
              
              {hoveredQuestion === index && (
                <div className="mt-2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
              )}
            </div>
          ))}
          
          <div className="red-capsule text-center text-sm mt-6">
            AI analyzes responses in real-time
          </div>
        </div>
      )}
      
      {!isExpanded && (
        <p className="text-center text-muted-foreground cursor-pointer" onClick={() => setIsExpanded(true)}>
          Click to see AI questionnaire →
        </p>
      )}
    </div>
  );
};