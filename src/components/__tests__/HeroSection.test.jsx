import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import HeroSection from '../HeroSection';

describe('HeroSection Component', () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView = vi.fn();
  });

  it('renders hero section with name', () => {
    render(<HeroSection />);
    
    expect(screen.getByText('ARNAB')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    render(<HeroSection />);
    
    expect(screen.getByText('Full Stack Web Developer')).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<HeroSection />);
    
    expect(screen.getByText(/Crafting digital experiences/i)).toBeInTheDocument();
  });

  it('renders View My Work button', () => {
    render(<HeroSection />);
    
    expect(screen.getByText('View My Work')).toBeInTheDocument();
  });

  it('renders Download CV link', () => {
    render(<HeroSection />);
    
    const cvLink = screen.getByText('Download CV');
    expect(cvLink).toBeInTheDocument();
    expect(cvLink.closest('a')).toHaveAttribute('download');
  });

  it('scrolls to projects section when View My Work is clicked', () => {
    // Create a mock projects section
    const projectsSection = document.createElement('section');
    projectsSection.id = 'projects';
    document.body.appendChild(projectsSection);
    
    render(<HeroSection />);
    
    const viewWorkButton = screen.getByText('View My Work');
    fireEvent.click(viewWorkButton);
    
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
    
    document.body.removeChild(projectsSection);
  });
});

