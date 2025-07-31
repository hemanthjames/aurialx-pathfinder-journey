import React, { useState, useEffect } from 'react';
import { FloatingNavigation } from './FloatingNavigation';
import { TreeBranch } from './TreeBranch';
import { AppIdeaNode } from './nodes/AppIdeaNode';
import { TargetAudienceNode } from './nodes/TargetAudienceNode';
import { CoreQuestionsNode } from './nodes/CoreQuestionsNode';
import { AIFeaturesNode } from './nodes/AIFeaturesNode';
import { BusinessModelNode } from './nodes/BusinessModelNode';
import { FinancialFreedomNode } from './nodes/FinancialFreedomNode';

export const AurialRoadmap = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNode = (nodeId: string) => {
    const element = document.getElementById(nodeId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setActiveNode(nodeId);
    }
  };

  return (
    <div className="roadmap-container min-h-screen bg-background overflow-hidden">
      {/* Spline 3D Background */}
      <div 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        dangerouslySetInnerHTML={{
          __html: '<spline-viewer url="https://prod.spline.design/Dgqe0CFwKpouo4HG/scene.splinecode"></spline-viewer>'
        }}
      />
      
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center z-10">
        <div className="text-center space-y-8 fade-in-up">
          <h1 className="text-7xl font-bold glow-text mb-4">
            Aurial<span className="text-primary">.X</span>
          </h1>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            AI-Powered Financial Investment Planner
          </p>
          <div className="red-capsule inline-block text-xl font-semibold">
            Your Journey to Financial Freedom Starts Here
          </div>
        </div>
        
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animation: 'pulse 3s ease-in-out infinite',
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Navigation */}
      <FloatingNavigation onNavigate={scrollToNode} activeNode={activeNode} />

      {/* Interactive Roadmap */}
      <div className="relative z-10" style={{ height: '400vh' }}>
        {/* Central Trunk */}
        <div 
          className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-foreground via-primary to-foreground"
          style={{ height: '100%', transform: 'translateX(-50%)' }}
        />

        {/* Branch 1: App Idea - Top Left */}
        <TreeBranch
          start={{ x: '50%', y: '10%' }}
          end={{ x: '20%', y: '20%' }}
          direction="left"
        />
        <div 
          id="app-idea"
          className="absolute"
          style={{ left: '5%', top: '15%' }}
        >
          <AppIdeaNode />
        </div>

        {/* Branch 2: Target Audience - Top Right */}
        <TreeBranch
          start={{ x: '50%', y: '25%' }}
          end={{ x: '80%', y: '35%' }}
          direction="right"
        />
        <div 
          id="target-audience"
          className="absolute"
          style={{ right: '5%', top: '30%' }}
        >
          <TargetAudienceNode />
        </div>

        {/* Branch 3: Core Questions - Left */}
        <TreeBranch
          start={{ x: '50%', y: '40%' }}
          end={{ x: '15%', y: '50%' }}
          direction="left"
        />
        <div 
          id="core-questions"
          className="absolute"
          style={{ left: '2%', top: '45%' }}
        >
          <CoreQuestionsNode />
        </div>

        {/* Branch 4: AI Features - Right */}
        <TreeBranch
          start={{ x: '50%', y: '55%' }}
          end={{ x: '85%', y: '65%' }}
          direction="right"
        />
        <div 
          id="ai-features"
          className="absolute"
          style={{ right: '2%', top: '60%' }}
        >
          <AIFeaturesNode />
        </div>

        {/* Branch 5: Business Model - Left */}
        <TreeBranch
          start={{ x: '50%', y: '70%' }}
          end={{ x: '25%', y: '78%' }}
          direction="left"
        />
        <div 
          id="business-model"
          className="absolute"
          style={{ left: '8%', top: '73%' }}
        >
          <BusinessModelNode />
        </div>

        {/* Final Node: Financial Freedom - Center Bottom */}
        <div 
          id="financial-freedom"
          className="absolute"
          style={{ left: '50%', top: '92%', transform: 'translateX(-50%)' }}
        >
          <FinancialFreedomNode onComplete={() => scrollToNode('cta-section')} />
        </div>
      </div>

      {/* CTA Section */}
      <div id="cta-section" className="relative z-10 min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-card">
        <div className="content-panel max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold glow-text">Ready to Begin?</h2>
          <p className="text-xl text-muted-foreground">
            Start your personalized journey to financial freedom with Aurial.X's AI-powered investment planning.
          </p>
          <button className="red-capsule text-xl px-12 py-4">
            Launch Aurial.X Simulation
          </button>
        </div>
      </div>
    </div>
  );
};