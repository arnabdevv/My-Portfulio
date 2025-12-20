import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SkillsSection from '../SkillsSection';

describe('SkillsSection Component', () => {
  it('renders Skills heading', () => {
    render(<SkillsSection />);
    
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  it('renders skill categories', () => {
    render(<SkillsSection />);
    
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
    expect(screen.getByText('Tools & Others')).toBeInTheDocument();
  });

  it('renders skill names and percentages', () => {
    render(<SkillsSection />);
    
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText(/90%/)).toBeInTheDocument();
    expect(screen.getByText(/95%/)).toBeInTheDocument();
  });
});

