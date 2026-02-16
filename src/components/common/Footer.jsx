import React from 'react';
import { personalInfo } from '../../config/content';

const Footer = () => {
  return (
    <footer className="w-full border-t border-dark-border py-6 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto text-center space-y-2">
        <p className="text-text-tertiary/60 text-xs">
          Thanks for scrolling this far.
        </p>
        <p className="text-text-tertiary text-sm">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
