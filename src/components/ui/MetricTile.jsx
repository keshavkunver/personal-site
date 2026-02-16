import React from 'react';

const MetricTile = ({ value, label }) => {
  return (
    <div className="text-center py-4 px-2">
      <div className="text-3xl sm:text-4xl font-bold text-text-primary mb-2 tracking-tight">
        {value}
      </div>
      <div className="text-text-tertiary text-sm uppercase tracking-wider font-medium">
        {label}
      </div>
    </div>
  );
};

export default MetricTile;
