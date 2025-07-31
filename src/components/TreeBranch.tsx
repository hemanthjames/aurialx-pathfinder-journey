import React from 'react';

interface TreeBranchProps {
  start: { x: string; y: string };
  end: { x: string; y: string };
  direction: 'left' | 'right';
}

export const TreeBranch: React.FC<TreeBranchProps> = ({ start, end, direction }) => {
  const startX = parseFloat(start.x);
  const startY = parseFloat(start.y);
  const endX = parseFloat(end.x);
  const endY = parseFloat(end.y);

  const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
  const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);

  return (
    <div
      className="tree-branch"
      style={{
        left: start.x,
        top: start.y,
        width: `${length}%`,
        transform: `rotate(${angle}deg)`,
        transformOrigin: '0 50%',
        background: `linear-gradient(90deg, 
          transparent, 
          hsl(var(--foreground) / 0.3) 20%, 
          hsl(var(--primary) / 0.6) 50%, 
          hsl(var(--foreground) / 0.3) 80%, 
          transparent
        )`,
      }}
    />
  );
};