import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("renders the logo", () => {
    render(<Header />);

    expect(screen.getByText("mem")).toBeInTheDocument();
    expect(screen.getByText("Heap")).toBeInTheDocument();
  });

  it("logo links to home", () => {
    render(<Header />);

    const link = screen.getByText("mem");

    expect(link).toHaveAttribute("href", "/");
  });

  it("renders navigation links", () => {
    render(<Header />);

    expect(screen.getByText("Guides")).toBeInTheDocument();
    expect(screen.getByText("Tutorials")).toBeInTheDocument();
    expect(screen.getByText("Snippets")).toBeInTheDocument();
  });

  it("navigation links have correct href", () => {
    render(<Header />);

    const links = screen.getAllByRole("link");

    expect(links[1]).toHaveAttribute("href", "#");
    expect(links[2]).toHaveAttribute("href", "#");
    expect(links[3]).toHaveAttribute("href", "#");
  });

  it("has semantic structure", () => {
    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument(); // <header>
    expect(screen.getByRole("navigation")).toBeInTheDocument(); // <nav>
  });
});
