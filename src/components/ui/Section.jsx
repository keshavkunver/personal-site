import React from 'react';

const Section = ({
  children,
  id,
  className = '',
  fullHeight = false,
}) => {
  const heightClass = fullHeight ? 'min-h-screen pt-[60px]' : '';

  return (
    <section
      id={id}
      name={id}
      className={`w-full ${heightClass} py-20 px-6 md:px-8 ${className}`}
    >
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
