'use client';

import { useState, useRef, useEffect } from 'react';
import { FiMoreVertical, FiShare2, FiLink, FiCheck } from 'react-icons/fi';

export default function ShareButton({ articleSlug, articleTitle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef(null);

  const url = typeof window !== 'undefined'
    ? `${window.location.origin}/blog/${articleSlug}`
    : `https://www.kunver.com/blog/${articleSlug}`;

  const canNativeShare = typeof navigator !== 'undefined' && !!navigator.share;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const handleCopyLink = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleNativeShare = async (e) => {
    e.stopPropagation();
    try {
      await navigator.share({
        title: articleTitle ?? 'Article',
        url,
        text: `Thought you might find this interesting: ${articleTitle}`,
      });
      setIsOpen(false);
    } catch (err) {
      if (err.name !== 'AbortError') {
        handleCopyLink(e);
      }
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 -m-2 text-text-tertiary hover:text-text-primary transition-colors duration-200 rounded-lg"
        aria-label="Share"
        aria-expanded={isOpen}
      >
        <FiMoreVertical className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 py-1 min-w-[140px] bg-dark-surface border border-dark-border rounded-lg shadow-lg z-50">
          <button
            type="button"
            onClick={handleCopyLink}
            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-dark-elevated transition-colors text-left"
          >
            {copied ? (
              <>
                <FiCheck className="w-4 h-4 text-accent shrink-0" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <FiLink className="w-4 h-4 shrink-0" />
                <span>Copy link</span>
              </>
            )}
          </button>
          {canNativeShare && (
            <button
              type="button"
              onClick={handleNativeShare}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-dark-elevated transition-colors text-left"
            >
              <FiShare2 className="w-4 h-4 shrink-0" />
              <span>Share</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
