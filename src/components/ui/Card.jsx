import React from 'react';

const Card = ({
  children,
  className = '',
  hover = false,
  ...props
}) => {
  const baseStyles = `
    bg-gradient-to-b from-dark-surface to-dark-surface/80
    border border-dark-border
    rounded-xl
    p-6
    shadow-lg shadow-black/20
  `;
  
  const hoverStyles = hover 
    ? `
      hover:border-dark-border-hover
      hover:shadow-xl hover:shadow-accent/10
      hover:-translate-y-1
      transition-all duration-250 ease-out
      cursor-pointer
    ` 
    : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
