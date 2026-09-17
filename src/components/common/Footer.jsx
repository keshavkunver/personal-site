'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { personalInfo, socialLinks } from '../../config/content';

// Every link here resolves to something real: homepage anchors for the
// sections, routes for the standalone pages. No placeholder destinations.
const siteLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'Writing', href: '/#writing' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Now', href: '/now' },
];

const offerLinks = [
  { label: 'Build with me', href: '/build' },
  { label: 'Websites', href: '/websites' },
  { label: 'Resume', href: '/keshav-kunver-resume.pdf' },
];

const elsewhereLinks = [
  { label: 'LinkedIn', href: socialLinks.linkedin },
  { label: 'GitHub', href: socialLinks.github },
  { label: 'Instagram', href: socialLinks.instagram },
];

const linkClass =
  'text-text-tertiary hover:text-text-primary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg rounded-sm';

const Column = ({ title, children }) => (
  <div>
    <h2 className="font-heading text-xs uppercase tracking-wider text-text-secondary mb-3">
      {title}
    </h2>
    <ul className="space-y-2 text-sm">{children}</ul>
  </div>
);

const Footer = () => {
  const pathname = usePathname();

  // The page you are on is marked, not linked: a self-link is a dead click.
  const renderLink = ({ label, href }) =>
    href === pathname ? (
      <span aria-current="page" className="text-text-secondary">
        {label}
      </span>
    ) : (
      <Link href={href} className={linkClass}>
        {label}
      </Link>
    );

  return (
  <footer className="w-full border-t border-dark-border mt-24">
    <div className="max-w-6xl mx-auto px-4 py-14">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Identity: the last thing a reader sees should say who you are */}
        <div className="lg:pr-6">
          <p className="font-display text-lg text-text-primary">{personalInfo.name}</p>
          <p className="text-sm text-text-secondary mt-1 leading-relaxed">
            {personalInfo.title}
          </p>
          <p className="text-sm text-text-tertiary mt-2">{personalInfo.location}</p>
        </div>

        <Column title="Site">
          {siteLinks.map((item) => (
            <li key={item.label}>{renderLink(item)}</li>
          ))}
        </Column>

        <Column title="Work with me">
          {offerLinks.map((item) => (
            <li key={item.label}>{renderLink(item)}</li>
          ))}
        </Column>

        <Column title="Elsewhere">
          {elsewhereLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {label}
              </a>
            </li>
          ))}
        </Column>
      </div>

      <div className="mt-12 pt-6 border-t border-dark-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className="text-text-tertiary text-xs">Thanks for scrolling this far.</p>
        <p className="text-text-tertiary text-xs">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
