import React from 'react';

const Tag = ({ children, className = '', variant = 'default' }) => {
  const variants = {
    default: 'bg-dark-elevated/80 text-text-secondary border-dark-border',
    accent: 'bg-accent/10 text-accent border-accent/20',
  };

  return (
    <span className={`
      inline-flex items-center
      px-3 py-1
      rounded-md
      text-xs font-medium
      tracking-wide
      border
      ${variants[variant]}
      ${className}
    `}>
      {children}
    </span>
  );
};

export default Tag;
