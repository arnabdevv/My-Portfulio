import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectsSection from '../ProjectsSection';
import { projects } from '../../data/projects';

describe('ProjectsSection Component', () => {
  it('renders Featured Projects heading', () => {
    render(<ProjectsSection />);
    
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
  });

  it('renders all projects', () => {
    render(<ProjectsSection />);
    
    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });

  it('renders project technologies', () => {
    render(<ProjectsSection />);
    
    projects.forEach((project) => {
      project.technologies.forEach((tech) => {
        expect(screen.getByText(tech)).toBeInTheDocument();
      });
    });
  });

  it('renders Live Demo and Code links for each project', () => {
    render(<ProjectsSection />);
    
    const liveDemoLinks = screen.getAllByText('Live Demo');
    const codeLinks = screen.getAllByText('Code');
    
    expect(liveDemoLinks.length).toBeGreaterThan(0);
    expect(codeLinks.length).toBeGreaterThan(0);
  });
});

