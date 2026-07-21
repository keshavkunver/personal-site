import React from 'react';

const Card = ({
  children,
  className = '',
  hover = false,
  ...props
}) => {
  const baseStyles = `
    bg-dark-surface
    border border-dark-border
    rounded-2xl
    p-6
    shadow-inner-top
  `;

  const hoverStyles = hover
    ? `
      hover:border-dark-border-hover
      hover:-translate-y-0.5
      transition-all duration-200 ease-out
    `
    : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
