import { expect, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock GSAP
global.gsap = {
  from: vi.fn(() => ({})),
  to: vi.fn(() => ({})),
  registerPlugin: vi.fn(),
  context: vi.fn((fn, scope) => {
    if (fn) fn();
    return {
      revert: vi.fn(),
    };
  }),
};

global.ScrollTrigger = {
  refresh: vi.fn(),
};

// Mock particles.js
window.particlesJS = vi.fn(() => ({}));

// Mock VanillaTilt
window.VanillaTilt = {
  init: vi.fn(() => ({
    destroy: vi.fn(),
  })),
};

// Mock scrollIntoView
Element.prototype.scrollIntoView = vi.fn();

// Mock window.scrollTo
window.scrollTo = vi.fn();

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};
