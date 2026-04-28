import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { UiTestsSuite } from "@/tests/utils/UiTestsSuite";

describe("Button", () => {
  UiTestsSuite({
    component: Button,
    displayName: "Button",
    defaultTag: "button",
    text: "Click me",
  });

  it("applies default variants", () => {
    render(<Button>Default</Button>);

    const el = screen.getByText("Default");

    expect(el.className).toMatch(/bg-neutral-900/);
    expect(el.className).toMatch(/px-4/); // md size
  });

  it("applies variant correctly", () => {
    render(<Button variant="ghost">Ghost</Button>);

    const el = screen.getByText("Ghost");

    expect(el.className).toMatch(/border-transparent/);
  });

  it("applies size correctly", () => {
    render(<Button size="lg">Large</Button>);

    const el = screen.getByText("Large");

    expect(el.className).toMatch(/px-6/);
  });

  it("can be disabled", () => {
    render(<Button disabled>Disabled</Button>);

    const el = screen.getByText("Disabled");

    expect(el).toBeDisabled();
  });
});
