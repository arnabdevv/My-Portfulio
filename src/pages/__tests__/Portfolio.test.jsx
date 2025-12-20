import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Portfolio from '../Portfolio';

describe('Portfolio Page', () => {
  beforeEach(() => {
    // Mock window.scrollTo
    window.scrollTo = vi.fn();
    
    // Mock particlesJS
    window.particlesJS = vi.fn();
  });

  it('renders all main sections', () => {
    render(<Portfolio />);
    
    // Check for section IDs
    expect(document.getElementById('home')).toBeInTheDocument();
    expect(document.getElementById('about')).toBeInTheDocument();
    expect(document.getElementById('skills')).toBeInTheDocument();
    expect(document.getElementById('projects')).toBeInTheDocument();
    expect(document.getElementById('contact')).toBeInTheDocument();
  });

  it('scrolls to top on mount', () => {
    render(<Portfolio />);
    
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  });

  it('initializes particles.js', () => {
    render(<Portfolio />);
    
    expect(window.particlesJS).toHaveBeenCalled();
  });
});

