import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium
    rounded-lg
    transition-all duration-200 ease-out
    focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-dark-bg
  `;

  const variants = {
    primary: `
      bg-accent text-white
      hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25
      active:scale-[0.98]
    `,
    secondary: `
      bg-dark-surface text-text-primary
      border border-dark-border
      hover:bg-dark-elevated hover:border-dark-border-hover
      active:scale-[0.98]
    `,
    ghost: `
      bg-transparent text-text-secondary
      hover:bg-dark-surface hover:text-text-primary
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
