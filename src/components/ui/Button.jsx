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
    font-heading font-medium
    rounded-lg
    transition-all duration-200 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg
  `;

  const variants = {
    primary: `
      bg-accent text-dark-bg
      hover:bg-accent-hover
      active:scale-[0.98]
    `,
    secondary: `
      bg-transparent text-text-primary
      border border-dark-border
      hover:border-dark-border-hover hover:bg-white/[0.04]
      active:scale-[0.98]
    `,
    ghost: `
      bg-transparent text-text-secondary
      hover:bg-white/[0.04] hover:text-text-primary
    `,
  };

  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-10 px-5 text-sm',
    lg: 'h-11 px-6 text-base',
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
