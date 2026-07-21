import React from 'react';

const MetricTile = ({ value, label, caption }) => {
  return (
    <div className="text-center py-4 px-2">
      <div className="text-3xl sm:text-4xl font-bold text-text-primary mb-2 tracking-tight">
        {value}
      </div>
      <div className="text-text-tertiary text-xs uppercase tracking-[0.15em] font-medium">
        {label}
      </div>
      {caption && (
        <div className="text-text-secondary text-xs mt-1.5">
          {caption}
        </div>
      )}
    </div>
  );
};

export default MetricTile;
