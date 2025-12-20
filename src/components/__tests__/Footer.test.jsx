import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
  it('renders copyright text', () => {
    render(<Footer />);
    
    expect(screen.getByText(/2024 Arnab Dinda/i)).toBeInTheDocument();
  });

  it('renders built with text', () => {
    render(<Footer />);
    
    expect(screen.getByText(/Built with/i)).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer />);
    
    const socialLinks = screen.getAllByRole('link');
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  it('renders Privacy Policy and Terms links', () => {
    render(<Footer />);
    
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
  });
});

