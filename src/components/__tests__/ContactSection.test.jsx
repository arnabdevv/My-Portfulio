import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactSection from '../ContactSection';

describe('ContactSection Component', () => {
  it('renders Get In Touch heading', () => {
    render(<ContactSection />);
    
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<ContactSection />);
    
    expect(screen.getByText(/arnabexpress3.12@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/\+91 8345974410/i)).toBeInTheDocument();
    expect(screen.getByText(/Kolkata, India/i)).toBeInTheDocument();
  });

  it('renders contact form fields', () => {
    render(<ContactSection />);
    
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Subject')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('renders Send Message button', () => {
    render(<ContactSection />);
    
    expect(screen.getByText('Send Message')).toBeInTheDocument();
  });

  it('validates required form fields', async () => {
    render(<ContactSection />);
    
    const submitButton = screen.getByText('Send Message');
    fireEvent.click(submitButton);
    
    // HTML5 validation should prevent submission
    const nameInput = screen.getByLabelText('Name');
    expect(nameInput).toBeRequired();
  });
});

