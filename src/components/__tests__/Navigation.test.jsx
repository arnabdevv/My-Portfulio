import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Navigation from "../Navigation";

describe("Navigation Component", () => {
  beforeEach(() => {
    // Mock scrollIntoView
    Element.prototype.scrollIntoView = vi.fn();
  });

  it("renders desktop navigation with all nav items", () => {
    render(<Navigation />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders mobile hamburger menu button", () => {
    render(<Navigation />);

    const hamburgerButton = screen.getByLabelText("Toggle menu");
    expect(hamburgerButton).toBeInTheDocument();
    expect(hamburgerButton).toHaveAttribute("aria-expanded", "false");
  });

  it("opens mobile menu when hamburger is clicked", async () => {
    render(<Navigation />);

    const hamburgerButton = screen.getByLabelText("Toggle menu");
    fireEvent.click(hamburgerButton);

    await waitFor(() => {
      expect(hamburgerButton).toHaveAttribute("aria-expanded", "true");
    });
  });

  it("closes mobile menu when nav item is clicked", async () => {
    render(<Navigation />);

    const hamburgerButton = screen.getByLabelText("Toggle menu");
    fireEvent.click(hamburgerButton);

    await waitFor(() => {
      expect(hamburgerButton).toHaveAttribute("aria-expanded", "true");
    });

    const homeButton = screen.getAllByText("Home")[1];
    fireEvent.click(homeButton);

    await waitFor(() => {
      expect(hamburgerButton).toHaveAttribute("aria-expanded", "false");
    });
  });

  it("calls scrollIntoView when nav item is clicked", () => {
    render(<Navigation />);

    const homeButton = screen.getAllByText("Home")[0];
    fireEvent.click(homeButton);

    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });
});
