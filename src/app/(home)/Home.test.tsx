import { render, screen } from "@testing-library/react";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders hero title", () => {
    render(<HomePage />);

    expect(
      screen.getByText("Notes I didn’t want to forget."),
    ).toBeInTheDocument();
  });

  it("renders description text", () => {
    render(<HomePage />);

    expect(
      screen.getByText(/memHeap are where I save and share/i),
    ).toBeInTheDocument();
  });

  it("renders social buttons with correct links", () => {
    render(<HomePage />);

    const github = screen.getByRole("link", { name: "GitHub" });
    const linkedin = screen.getByRole("link", { name: "LinkedIn" });
    const email = screen.getByRole("link", { name: "Email" });

    expect(github).toHaveAttribute("href", "https://github.com/your-username");
    expect(linkedin).toHaveAttribute(
      "href",
      "https://linkedin.com/in/your-username",
    );
    expect(email).toHaveAttribute("href", "mailto:your@email.com");
  });

  it("renders latest posts", () => {
    render(<HomePage />);

    expect(
      screen.getByText("Ubuntu: How to keep it clean"),
    ).toBeInTheDocument();

    expect(screen.getByText("Writing Your Own Allocator")).toBeInTheDocument();

    expect(screen.getByText("Pointers in Practice")).toBeInTheDocument();
  });

  it("renders 'Read more' links", () => {
    render(<HomePage />);

    const links = screen.getAllByText("Read more →");

    expect(links).toHaveLength(3);

    links.forEach((link) => {
      expect(link).toHaveAttribute("href", "/post");
    });
  });

  it("renders categories", () => {
    render(<HomePage />);

    const categories = [
      "Memory",
      "Systems",
      "Performance",
      "Networking",
      "Compilers",
    ];

    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it("renders footer", () => {
    render(<HomePage />);

    expect(
      screen.getByText(/If you like this kind of content/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/memHeap — built one note at a time/i),
    ).toBeInTheDocument();
  });
});
