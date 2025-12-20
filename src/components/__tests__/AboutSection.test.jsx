import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutSection from '../AboutSection';

describe('AboutSection Component', () => {
  it('renders About Me heading', () => {
    render(<AboutSection />);
    
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('renders about text content', () => {
    render(<AboutSection />);
    
    expect(screen.getByText(/passionate web developer/i)).toBeInTheDocument();
    expect(screen.getByText(/5\+ years of experience/i)).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<AboutSection />);
    
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    const githubLink = screen.getByRole('link', { name: /github/i });
    
    expect(linkedinLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/arnabdinda');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/arnabdevv');
  });

  it('renders profile card with name', () => {
    render(<AboutSection />);
    
    expect(screen.getByText('Arnab Dinda')).toBeInTheDocument();
  });
});

